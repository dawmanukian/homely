import React from "react";
import "./request.css";

const Request = ({ data }) => {
  return (
    <div className="request">
      <b>{data.name}</b>
      <b>{data.surname}</b>
      <b></b>
    </div>
  );
};

export default Request;
