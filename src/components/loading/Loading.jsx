import React from "react";
import "./loading.css";
import logo from "../../img/logo.jpg";

const Loading = () => {
  return (
    <div className="loader_page">
      <img src={logo} className="logo" />
      <div class="loader"></div>
      <div style={{ height: "150px", display: "flex", alignItems: "center" }}>
        <b style={{ color: "#C1C1C1FF" }}>Real estate agency you can trust.</b>
      </div>
    </div>
  );
};

export default Loading;
