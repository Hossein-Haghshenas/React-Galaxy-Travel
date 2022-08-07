import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <section className="footer-left-section">
          <section className="location">
            <FaSearchLocation className="footer-icons" size={20} />
            <section>
              <p>456 Acme St.</p>
              <h4>London, Uk</h4>
            </section>
          </section>
          <section className="phone">
            <h4>
              <FaPhone className="footer-icons" size={20} /> 1-800-456-789
            </h4>
          </section>
          <section className="email">
            <h4>
              <FaMailBulk className="footer-icons" size={20} /> trips@galaxy.com
            </h4>
          </section>
        </section>
        <section className="footer-right-section">
          <h4>About the company</h4>
          <p>
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            officia, esse perspiciatis possimus optio consequatur, pariatur
            obcaecati harum quidem explicabo sapiente veniam repellat. "
          </p>
          <section className="social">
            <FaFacebook className="footer-icons" size={30} />
            <FaTwitter className="footer-icons" size={30} />
            <FaLinkedin className="footer-icons" size={30} />
          </section>
        </section>
      </section>
    </footer>
  );
};
export default Footer;
