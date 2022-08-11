import React from "react";
import Navbar from "./../components/navbar/Navbar";
import HeroImage from "./../components/heroimage/HeroImage";
import PricingCards from "./../components/pricing/Pricing";

const PricingPage = () => {
  return (
    <section>
      <Navbar />
      <HeroImage heading={"PRICING."} text={"Choose your trip."} />
      <PricingCards />
    </section>
  );
};

export default PricingPage;
