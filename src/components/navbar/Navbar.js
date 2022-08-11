import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className={`header ${color ? "header-bg" : null}`}>
      <Link to={"/"}>
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-menu-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-menu-item">
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li className="nav-menu-item">
          <Link to={"/training"}>Training</Link>
        </li>
        <li className="nav-menu-item">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <section className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="hamburger-icon" size={20} />
        ) : (
          <FaBars className="hamburger-icon" size={20} />
        )}
      </section>
    </header>
  );
};

export default Navbar;
