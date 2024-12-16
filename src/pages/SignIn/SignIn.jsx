import React, { useContext, useState } from "react";

const URL = import.meta.env.VITE_SERVER_URL;
import { useNavigate } from "react-router-dom";
import { userContext } from "../../hooks/context/user";
export default function SignIn() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const handleSignin = () => {
    const URI = URL + "/authen";
    fetch(URI, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "DASDASDAS");
        if (data.statusCode === 200) {
          console.log(data.data);
          localStorage.setItem("username", user.username);
          setUser(data.data);
          navigate("/");
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-3">
      <h1 className="title-text">Sign in</h1>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div class="col-xxl-3 col-xl-3 col-md-6 col-lg-4">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              setUserInput({ ...userInput, username: event.target.value });
            }}
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div class="col-xxl-3 col-xl-3 col-md-6 col-lg-4">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              setUserInput({ ...userInput, password: event.target.value });
            }}
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center mb-3">
        <div class="col-xxl-3 col-xl-3 col-md-6 col-lg-4 d-flex gap-1">
          <a href="reset-password/send-mail" className="text-decoration-none">
            Forgot Password?
          </a>

          <span>Or</span>
          <a href="signup" className="text-decoration-none">
            Sign up?
          </a>
        </div>
      </div>{" "}
      <div className="row w-100 d-flex justify-content-center mb-3"></div>
      <button className="btn btn-dark" onClick={handleSignin}>
        Sign in
      </button>
    </div>
  );
}
