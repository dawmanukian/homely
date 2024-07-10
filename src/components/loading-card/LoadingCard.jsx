import React from "react";
import "./ld-card.css";

const LoadingCard = () => {
  return (
    <div className="el-card_l">
      <div className="card-head_l"></div>
      <div className="card-data_l">
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}></div>
      </div>
      <div className="card-footer_l">
        <div style={{ display: "flex", gap: "15px" }}>
          <div className="card-id_l"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
