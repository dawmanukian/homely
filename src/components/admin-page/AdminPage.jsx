import React from "react";
import "./admin-page.css";
import AdminLeftMenu from "../admin-left-menu/AdminLeftMenu";
import RequestsPanel from "../requests-panel/RequestsPanel";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <AdminLeftMenu />
      <RequestsPanel />
    </div>
  );
};

export default AdminPage;
