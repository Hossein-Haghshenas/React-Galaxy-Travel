import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/heroimage/HeroImage";
import Training from "./../components/training/Training";

const TrainingPage = () => {
  return (
    <section>
      <Navbar />
      <HeroImage
        heading={"TRAINING."}
        text={"Pre-Flight & In-Flight Training."}
      />
      <Training />
    </section>
  );
};

export default TrainingPage;
