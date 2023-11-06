import React, { useState } from "react";
import "./login-reg.css";
import LoginForm from "../../components/login-form/LoginForm";
import RegForm from "../../components/reg-form/RegForm";
import AuthImg from "../../components/auth-img/AuthImg";

const LoginRegPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-reg-page">
      <AuthImg />
      {showLogin ? (
        <LoginForm switchForm={() => setShowLogin(!showLogin)} />
      ) : (
        <RegForm switchForm={() => setShowLogin(!showLogin)} />
      )}
    </div>
  );
};

export default LoginRegPage;
