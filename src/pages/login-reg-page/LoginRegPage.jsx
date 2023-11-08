import React from "react";
import "./login-reg.css";
import LoginForm from "../../components/login-form/LoginForm";
import AuthImg from "../../components/auth-img/AuthImg";

const LoginRegPage = () => {

  return (
    <div className="login-reg-page">
      <AuthImg />
      <LoginForm />
    </div>
  );
};

export default LoginRegPage;
