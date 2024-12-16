import React, { useState } from "react";

const URL = import.meta.env.VITE_SERVER_URL;

export default function SendMail() {
  const [username, setUsername] = useState("");
  const handleSendMail = () => {
    const URI = URL + `/token/reset-password/${username}`;
    fetch(URI, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      });
  };
  return (
    <div className="container-fluid d-flex flex-column align-items-center p-3">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter your username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
      </div>
      <button className="btn btn-dark" onClick={handleSendMail}>
        Send Mail
      </button>
    </div>
  );
}
