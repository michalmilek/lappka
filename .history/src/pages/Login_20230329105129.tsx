import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }
  if (user) {
    return redirect("/dashboard");
  }

  return (
    <main>
      <Form />
    </main>
  );
};

export default Login;
