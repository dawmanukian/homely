import React from "react";
import "./admin-page.css";
import AdminLeftMenu from "../admin-left-menu/AdminLeftMenu";
import Requests from "../requests/Requests";

const AdminPage = () => {
  const requests = [
    {
      id: Math.random(),
      name: "Mher",
      surname: "Araqelyan",
      phone: "+37494673735",
      email: "mher_araqelyan@gmail.com",
    },
    {
      id: Math.random(),
      name: "Jon",
      surname: "Same",
      phone: "+37494892267",
      email: "the_samejon@gmail.com",
    },
    {
      id: Math.random(),
      name: "Artak",
      surname: "Hakobyan",
      phone: "+37494673735",
      email: "mher_araqelyan@gmail.com",
    },
    {
      id: Math.random(),
      name: "Mher",
      surname: "Araqelyan",
      phone: "+37494673735",
      email: "mher_araqelyan@gmail.com",
    },
    {
      id: Math.random(),
      name: "Mher",
      surname: "Araqelyan",
      phone: "+37494673735",
      email: "mher_araqelyan@gmail.com",
    },
  ];

  return (
    <div className="admin-page">
      <AdminLeftMenu />
      <Requests data={requests}/>
    </div>
  );
};

export default AdminPage;
