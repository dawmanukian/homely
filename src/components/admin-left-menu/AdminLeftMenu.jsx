import React from "react";
import "./admin-left-menu.css";

const AdminLeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="left-menu-item">Հայտեր</div>
      <div className="left-menu-item active">Հայտարարություններ</div>
      <div className="left-menu-item">Գործակալներ</div>
      <div className="left-menu-item">Մենեջերներ</div>
    </div>
  );
};

export default AdminLeftMenu;
