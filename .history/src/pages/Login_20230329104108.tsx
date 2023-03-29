import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Login = () => {
  const navigate = useNavigate();

  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }
  if (user) {
    navigate("/dashboard");
    return <div>You are logged in. Redirecting to dashboard!</div>;
  }

  useEffect(() => {
    navigate("/dashboard");
  }, [user]);

  return (
    <main>
      <Form />
    </main>
  );
};

export default Login;
