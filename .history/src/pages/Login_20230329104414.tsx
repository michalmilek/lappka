import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [isLoggedIn, navigate]);

  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }
  if (user) {
    setIsLoggedIn(true);
    return <div>You are logged in. Redirecting to dashboard!</div>;
  }

  return (
    <main>
      <Form />
    </main>
  );
};

export default Login;
