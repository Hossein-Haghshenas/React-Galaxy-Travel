import React from "react";
import "./Training.css";

import { Link } from "react-router-dom";

import pod from "../../assets/image/pod.jpg";
import moon from "../../assets/image/moon.jpg";

const Training = () => {
  return (
    <section className="training">
      <section className="training-left-section">
        <h1>Training</h1>
        <p>
          Thorough training is a necessity when traveling to space. We offer all
          inclusive training for pre-flight and in-flight scenarios.
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </section>
      <section className="training-right-section">
        <section className="img-container">
          <section className="img-stack top">
            <img src={moon} className={"moon-img"} alt="" />
          </section>
          <section className="img-stack bottom">
            <img src={pod} className={"pod-img"} alt="" />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Training;
