import React, { useEffect, useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const Login = () => {
  const storageData = localStorage.getItem("user");
  let user;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }
  if (user) {
    return (
      <div>
        <p>You are logged in. Redirecting to dashboard...</p>
        <Link to={"/dashboard"}>
          <button>Redirect to dashboard immediately</button>
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
