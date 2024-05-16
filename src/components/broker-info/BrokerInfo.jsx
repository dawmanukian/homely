import React, { useEffect, useState } from "react";
import "./broker-info.css";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import axios from "axios";

const BrokerInfo = ({ brokerId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await axios.get(
          "https://service.homely.am/api/admin/get",
          {
            params: { brokerId },
          }
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    brokerId && get_data();
  }, []);

  return data.map((el) => {
    return (
      <div className="broker-info-panel">
        <div className="broker-data">
          <img src={el.image} height={"90px"} width={"90px"} />
        </div>
        <div className="broker-contact">
          <div className="broker-data-info">
            <b>
              {el.name} {el.surname}
            </b>
          </div>
          <p>
            <BsTelephone className="broker-contact-icon" />
            <a href={`tel:+37455600096`} className="contact-link">
              +37455600096
            </a>
          </p>
          <p>
            <GoMail className="broker-contact-icon" />
            <a href={`mailto:info@homely.am`} className="contact-link">
              info@homely.am
            </a>
          </p>
        </div>
      </div>
    );
  });
};

export default BrokerInfo;
