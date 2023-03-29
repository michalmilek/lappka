import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const LoginSite = () => {
  const navigate = useNavigate();
  const storageData = localStorage.getItem("user");
  let user = null;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
    navigate("/dashboard");
  }
  if (user) {
    return <div>You are logged in. Redirecting to dashboard!</div>;
  }

  return (
    <div>
      <Form />
    </div>
  );
};

export default LoginSite;
