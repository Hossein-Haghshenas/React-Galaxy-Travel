import React from "react";
import Navbar from "../components/navbar/Navbar";
import Video from "../components/videobg/Video";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="home-page">
        <Video />
      </section>
    </>
  );
};

export default HomePage;
