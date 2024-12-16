import React, { useContext, useState } from "react";
import { userContext } from "../../hooks/context/user";

const field = ["Gmail", "Address", "Phone"];

const URL = import.meta.env.VITE_SERVER_URL;

export default function UserUpdate() {
  const [userInput, setUserInput] = useState({});
  const { user, setUser } = useContext(userContext);
  const handleUserInput = (event) => {
    let { name, value } = event.target;

    name = name.toLowerCase();
    setUserInput({ ...userInput, [name]: value });
  };
  const handleUpdateUser = () => {
    const URI = URL + `/user/${user.username}`;
    fetch(URI, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200) {
          setUser(data.data);
          alert("Update succesfully");
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <div className="container mt-3 ">
      <div className="row w-100 d-flex align-items-center justify-content-center">
        <div className="col-lg-5 col-9 col-md-8 shadow p-3 d-flex flex-column ">
          {field.map((value, index) => {
            return (
              <input
                className="form-control mb-3"
                placeholder={user[value.toLowerCase()] || value}
                name={value}
                onChange={handleUserInput}
              ></input>
            );
          })}
          <button className="btn btn-dark" onClick={handleUpdateUser}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
