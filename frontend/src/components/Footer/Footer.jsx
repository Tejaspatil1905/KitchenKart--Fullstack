import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img height={92} src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            natus omnis quam?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8485899652</li>
            <li>contact@KitchenKart.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright 2025 @ KitchenKart.com - All Right Reserved
      </p>
    </div>
  );
};
import "./Footer.css";
import { assets } from "../../assets/assets";
export default Footer;
