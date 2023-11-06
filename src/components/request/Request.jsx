import React from "react";
import "./request.css";
import { FaUser } from "react-icons/fa";
import { LuMail, LuPhone, LuCheck, LuX } from "react-icons/lu";

const Request = ({ data }) => {
  return (
    <div className="request">
      <div className="req-user-name">
        <FaUser className="user-icon" />
        <b>
          {data.name} {data.surname}
        </b>
      </div>
      <div className="req-user-name">
        <LuMail className="user-icon" />
        <b>{data.email}</b>
      </div>
      <div className="req-user-name">
        <LuPhone className="user-icon" />
        <b>{data.phone}</b>
      </div>
      <div className="req-user-name">
        <button className="req-btn accept-btn">
          <LuCheck />
        </button>
        <button className="req-btn decline-btn">
          <LuX />
        </button>
      </div>
    </div>
  );
};

export default Request;
