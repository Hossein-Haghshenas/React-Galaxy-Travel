import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Details</label>
        <textarea placeholder="Type a short message here" rows="6" />
        <button className="btn">Submit</button>
      </form>
    </section>
  );
};

export default Form;
