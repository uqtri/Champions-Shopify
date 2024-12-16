import React, { useEffect, useState } from "react";

const URL = import.meta.env.VITE_SERVER_URL;

const option = ["username", "gmail", "phone", "address"];
export default function UserManagement() {
  const [list, setList] = useState([]);
  const [banReason, setBanReason] = useState("");
  const [isBanReasonVisible, setIsBanReasonVisible] = useState(false);
  const [userToBan, setUserToBan] = useState("");

  useEffect(() => {
    const URI = URL + "/user";
    fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.data.userList);
      });
  }, []);

  const handleBanClick = (user) => {
    setUserToBan(user.username);
    setIsBanReasonVisible(true);
  };

  const handleBanReasonChange = (e) => {
    setBanReason(e.target.value);
  };

  const handleBanSubmit = () => {
    if (banReason.trim() === "") {
      alert("Please enter a reason for banning.");
      return;
    }
    const URI = URL + `/user/${userToBan}`;
    fetch(URI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: banReason,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("User banned successfully!");
        setList((prevList) =>
          prevList.filter((user) => user.username !== userToBan.username)
        );
        setIsBanReasonVisible(false);
        setBanReason("");
      })
      .catch((error) => {
        console.error("Error banning user: @@@", error);
        alert("Failed to ban user.");
      });
  };

  return (
    <div className="container py-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            {option.map((option, index) => {
              return (
                <th key={option} className="text-capitalize">
                  {option}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((value) => {
              if (value.username !== "admin") {
                return (
                  <tr key={value.username}>
                    {option.map((option, index) => {
                      return (
                        <td
                          className={
                            value.isBanned
                              ? "text-body-secondary text-decoration-line-through"
                              : ""
                          }
                          key={option}
                        >
                          {value[option]}
                        </td>
                      );
                    })}
                    <td>
                      <button
                        className={
                          value.isBanned
                            ? "btn btn-secondary"
                            : "btn btn-danger"
                        }
                        disabled={value.isBanned ? true : false}
                        onClick={() => handleBanClick(value)}
                      >
                        Ban user
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>

      {isBanReasonVisible && (
        <div
          className="vw-100 vh-100 d-flex align-items-center justify-content-center position-fixed top-0 start-0"
          style={{
            zIndex: 999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="position-absolute top-50 start-50 translate-middle">
            <textarea
              value={banReason}
              onChange={handleBanReasonChange}
              placeholder="Please enter a reason for banning this user."
              rows="3"
              className="px-2"
            />
            <div>
              <button className="btn btn-danger me-2" onClick={handleBanSubmit}>
                Ban User
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setIsBanReasonVisible(false);
                  setBanReason("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
