import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username === "") {
      navigate("/signin");
    }
  }, []);

  return <>{children}</>;
}
