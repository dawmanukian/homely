import React from "react";
import "./footer.css";
import {
  FaPhone,
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logo from "../../img/logo.jpg";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <footer>
      <div className="footer-data">
        <div className="footer-contact-data">
          <div className="footer-contact">
            <a href="tel:+37455600096" className="footer-contact">
              <FaPhone className="footer-icon" />
              <span>+37455600096</span>
            </a>
          </div>
          <div className="footer-contact">
            <a
              href="mailto:homely-realestate@gmail.com"
              className="footer-contact"
            >
              <IoMail className="footer-icon" />
              <span>homely-realestate@gmail.com</span>
            </a>
          </div>
          <div className="footer-contact">
            <div className="all-contact-icons">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61551599789842"
                className="footer-icon"
              >
                <FaFacebook className="footer-icon" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/homely.am/"
                className="footer-icon"
              >
                <FaInstagram className="footer-icon" />
              </a>
              <a
                target="_blank"
                href="https://t.me/realestateagencyhomely"
                className="footer-icon"
              >
                <FaTelegram className="footer-icon" />
              </a>
              <a
                target="_blank"
                href="https://t.me/realestateagencyhomely"
                className="footer-icon"
              >
                <FaWhatsapp className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <img src={logo} height={"110px"} style={{ borderRadius: "22px" }} />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          backgroundColor: "#D5D9E1FF",
          border: "none",
          height: "1px",
        }}
      />
      <p className="all-rights-reserved">© 2024 Homely. All Rights Reserved.</p>
      <p className="created-by">Created by Magical</p>
      <a href="https://wakatime.com/badge/user/8760925d-cbf3-4b00-833c-43af03b3a644/project/018bb5b5-aa4d-405b-a02c-b01c21ed119b">
        <img
          src="https://wakatime.com/badge/user/8760925d-cbf3-4b00-833c-43af03b3a644/project/018bb5b5-aa4d-405b-a02c-b01c21ed119b.svg"
          alt="wakatime"
        />
      </a>
    </footer>
  );
};

export default Footer;
