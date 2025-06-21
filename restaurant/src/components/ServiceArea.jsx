import React from "react";
import icon1 from "../assets/images/about-icon1.png";
import icon2 from "../assets/images/about-icon2.png";
import icon3 from "../assets/images/about-icon3.png";



const ServiceArea = () => {
  return (
    <section id="service" className="pb-md-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 py-3 text-center">
            <img src={icon1} alt="" className="mb-3"/>
            <h4>Delicious Food</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, dolores.
            </p>
          </div>
          <div className="col-md-4 mb-3 py-3 text-center">
            <img src={icon2} alt="" className="mb-3"/>
            <h4>Professional Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, dolores.
            </p>
          </div>
          <div className="col-md-4 mb-3 py-3 text-center">
            <img src={icon3} alt="" className="mb-3"/>
            <h4>Excellent Menu</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
