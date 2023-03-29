import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
    useEffect(() => {
    if (user: any) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }
  if (user) {
    navigate("/dashboard");
    return <div>You are logged in. Redirecting to dashboard!</div>;
  }

  return (
    <main>
      <Form />
    </main>
  );
};

export default Login;
