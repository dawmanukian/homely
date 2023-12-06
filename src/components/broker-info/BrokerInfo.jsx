import React from "react";
import "./broker-info.css";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const BrokerInfo = () => {
  return (
    <div className="broker-info-panel">
      <div className="broker-data">
        <img
          src="https://www.aacb.com/wp-content/uploads/2016/01/customs-brokerage-customs-broker.jpg"
          height={"85px"}
          width={"85px"}
        />
        <div className="broker-data-info">
          <b>Համլետ Խաչատրյան</b>
          <p>Գործակալ</p>
        </div>
      </div>
      <div className="broker-contact">
        <p>
          <BsTelephone className="broker-contact-icon"/>
          <a href="tel:+37494673735" className="contact-link">+37494673735</a>
        </p>
        <p>
          <GoMail className="broker-contact-icon"/>
          <a href="mailto:info.homely@gmail.com" className="contact-link">info.homely@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default BrokerInfo;
