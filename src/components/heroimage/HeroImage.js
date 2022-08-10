import React from "react";
import "./HeroImage.css";

const HeroImage = ({ heading, text }) => {
  return (
    <section className="hero-img">
      <section className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </section>
    </section>
  );
};

export default HeroImage;
