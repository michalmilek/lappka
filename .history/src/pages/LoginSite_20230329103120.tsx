import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const LoginSite = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*   const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]); */

  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
    setIsLoggedIn(true);
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
