import React, { useEffect, useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Login = () => {
  const redirectRef = useRef(null);

  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }
  if (user) {
    return (
      <div>
        <p>You are logged in. Redirecting to dashboard...</p>
        <Link
          ref={redirectRef}
          to={"/dashboard"}>
          Redirect to dashboard immediately{" "}
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Form />
    </main>
  );
};

export default Login;
