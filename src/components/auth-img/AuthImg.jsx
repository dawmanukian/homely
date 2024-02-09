import React from "react";
import "./auth-img.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const AuthImg = () => {
  return (
    <>
      <Link to={"/"}>
        <button className="back-btn">
          <FaArrowLeftLong />
        </button>
      </Link>
      <div className="page-img"></div>
    </>
  );
};

export default AuthImg;
