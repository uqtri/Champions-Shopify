import React from "react";
import Footer from "../../layouts/Footer/Footer";
import { useState } from "react";
import SignIn from "../SignIn/SignIn";

const URL = import.meta.env.VITE_SERVER_URL;

export default function SignUp() {
  const [userInput, setUserInput] = useState({
    gmail: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleSignUp = () => {
    if (userInput.confirmPassword !== userInput.password) {
      alert("Password is not same confirm password");
      return;
    }
    console.log(userInput, "!!");
    const URI = URL + "/user";
    fetch(URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      });
  };
  return (
    <div className="p-3 d-flex flex-column align-items-center">
      <h1 className="title-text mb-4"> Create account</h1>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div className="col-xl-4 col-md-6 col-lg-5">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="addon-wrapping"
            name="gmail"
            onChange={(event) => {
              handleUserInput(event);
            }}
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div className="col-xl-4 col-md-6 col-lg-5">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="username"
            onChange={(event) => {
              handleUserInput(event);
            }}
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div className="col-xl-4 col-md-6 col-lg-5">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="addon-wrapping"
            name="password"
            onChange={(event) => {
              handleUserInput(event);
            }}
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div className="col-xl-4 col-md-6 col-lg-5">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            name="confirmPassword"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              handleUserInput(event);
            }}
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div className="col-xl-4 col-md-6 col-lg-5">
          <span className="d-flex gap-1">
            Already have account?
            <a href="/signin">Sign in here</a>
          </span>
        </div>
      </div>

      <button className="px-3 btn btn-dark" onClick={handleSignUp}>
        Create
      </button>
    </div>
  );
}
