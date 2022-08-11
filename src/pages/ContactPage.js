import React from "react";
import Form from "../components/form/Form";
import HeroImage from "../components/heroimage/HeroImage";
import Navbar from "../components/navbar/Navbar";

const ContactPage = () => {
  return (
    <section>
      <Navbar />
      <HeroImage heading="CONTACT." text="Contact GLX Travel" />
      <Form />
    </section>
  );
};

export default ContactPage;
