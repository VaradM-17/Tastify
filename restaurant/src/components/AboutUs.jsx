import React from "react";
import about from "../assets/images/about.jpg";

const AboutUs = () => {
  return (
    // for desktop md-5 and mobile pb-3
    <section id="about" className="pb-md-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What We Do?</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, quam eveniet sequi rem ipsa consequatur accusamus cum.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
