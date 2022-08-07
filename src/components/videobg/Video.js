import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import spaceVideo from "../../assets/video/space.mp4";

const Video = () => {
  return (
    <div className="hero">
      {" "}
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <section className="content">
        <section>
          <h1>Galaxy. Travel.</h1>
          <p>World's first civilian space travel.</p>
        </section>
        <section>
          <Link to={"/training"} className="btn">
            Training
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            Launch
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Video;
