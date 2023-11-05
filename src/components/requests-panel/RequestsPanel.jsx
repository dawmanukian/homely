import React from "react";
import Requests from "../requests/Requests";

const RequestsPanel = () => {
  const requests = [
    {
      id: 1,
      name: "Mher",
      surname: "Araqelyan",
      email: "mheraraqelyan@gmail.com",
      phone: "+37494673735",
    },
    {
      id: 2,
      name: "Mher",
      surname: "Araqelyan",
      email: "mheraraqelyan@gmail.com",
      phone: "+37494673735",
    },
  ];

  return (
    <div>
      <Requests data={requests} />
    </div>
  );
};

export default RequestsPanel;
