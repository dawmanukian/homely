import React, { useState } from "react";
import "./login-reg.css";
import LoginForm from "../../components/login-form/LoginForm";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import RegForm from "../../components/reg-form/RegForm";

const LoginRegPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-reg-page">
      <Link to={"/"}>
        <button className="back-btn">
          <FaArrowLeftLong />
        </button>
      </Link>
      <div className="page-img"></div>
      {showLogin ? (
        <LoginForm switchForm={() => setShowLogin(!showLogin)} />
      ) : (
        <RegForm switchForm={() => setShowLogin(!showLogin)} />
      )}
    </div>
  );
};

export default LoginRegPage;
