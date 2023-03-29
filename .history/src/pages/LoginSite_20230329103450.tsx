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
    const user = JSON.parse(storageData);
    setIsLoggedIn(true);
  }

  console.log(isLoggedIn);

  /*   if (user) {
    console.log(user);
    return <div>You are logged in. Redirecting to dashboard!</div>;
  } */

  return <div></div>;
};

export default LoginSite;
