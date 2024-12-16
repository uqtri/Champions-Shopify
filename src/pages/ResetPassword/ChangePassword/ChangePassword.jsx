import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../hooks/context/user";

const URL = import.meta.env.VITE_SERVER_URL;
import { useNavigate, useSearchParams } from "react-router-dom";
import Password from "antd/es/input/Password";
export default function ChangePassword() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [query] = useSearchParams();
  const token = query.get("token");
  const username = query.get("username");
  const handlChangePassword = () => {
    if (userInput.newPassword !== userInput.confirmPassword) {
      alert("New password is not same Confirm password");
      return;
    }
    const URI =
      URL + `/user/reset-password?token=${token}&&username=${username}`;

    fetch(URI, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newPassword: userInput.newPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.statusCode === 200) {
          navigate("/signin");
        }
      });
  };
  const handleChangUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };
  return (
    <div className="container d-flex flex-column align-items-center jusitfy-content-center p-3">
      <div>
        <input
          placeholder="New password"
          className="mb-3 form-control"
          type="password"
          onChange={handleChangUserInput}
          name="newPassword"
        ></input>
        <input
          type="password"
          placeholder="Confirm password"
          className="mb-3 form-control"
          name="confirmPassword"
          onChange={handleChangUserInput}
        ></input>
      </div>
      <button className="btn btn-dark" onClick={handlChangePassword}>
        Change password
      </button>
    </div>
  );
}
