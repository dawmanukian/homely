import React from "react";
import "./broker-info.css";

const BrokerInfo = () => {
  return (
    <div className="broker-info-panel">
      <div className="broker-data">
        <img
          src="https://www.aacb.com/wp-content/uploads/2016/01/customs-brokerage-customs-broker.jpg"
          height={"85px"}
          width={"85px"}
        />
        <div className="broker-contact">
          <b>Համլետ Խաչատրյան</b>
          <p>Գործակալ</p>
        </div>
      </div>
      <div>
        <p>+37494673735</p>
        <p>info.homely@gmail.com</p>
      </div>
    </div>
  );
};

export default BrokerInfo;
