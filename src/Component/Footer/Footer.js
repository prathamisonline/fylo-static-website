import "./Footer.css";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

import facebook from "../images/facebook-brands.svg";
import twitter from "../images/twitter-brands.svg";
import instagram from "../images/instagram-brands.svg";

import React from "react";

const Footer = () => {
  return (
    <section className="Footer">
      <img className="footer-logo" src={logo} alt="log"></img>
      <div>
        <div className="footer">
          <div className="footer-about">
            <img
              className="footer-location-img"
              src={location}
              alt="location"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="contacts">
            <div className="footer-contact">
              <span className="contact-number">
                <img src={phone} alt="contact"></img>
                <p>+1-543-123-4567</p>
              </span>
              <span className="contact-mail">
                <img src={email} alt="contact"></img>
                <p>Example@fylo.com</p>
              </span>
            </div>
          </div>
          <div>
            <ul>
              <li className="about-links">About Us</li>
              <li className="about-links">Jobs</li>
              <li className="about-links">Press</li>
              <li className="about-links">Blog</li>
            </ul>
          </div>
          <div className="about-links">
            <ul>
              <li className="about-links">Contact Us</li>
              <li className="about-links">Terms</li>
              <li className="about-links">Privacy</li>
            </ul>
          </div>
          <div className="social-links">
            <img src={facebook} alt="social"></img>
            <img src={twitter} alt="social"></img>
            <img src={instagram} alt="social"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
