import React from "react";
import card1 from "../assets/images/image-44.jpg";
import card2 from "../assets/images/image-45.jpg";
import card3 from "../assets/images/image-46.jpg";

const WorkArea = () => {
  return (
    <section id="work" className="pb-md-5 pb-3 bg-primary">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 text-center">
            <h2>What We Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={card1} alt="" className="img-fluid"/>
              <div className="card-body mt-2">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p className="card-text mt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat quidem quo ipsa quaerat pariatur vitae veritatis,
                  distinctio maxime sed asperiores.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={card2} alt="" className="img-fluid"/>
              <div className="card-body mt-2">
                <h4>Lorem ipsum dolor, sit amet.</h4>
                <p className="card-text mt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat quidem quo ipsa quaerat pariatur vitae veritatis,
                  distinctio maxime sed asperiores.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={card3} alt="" className="img-fluid"/>
              <div className="card-body mt-2">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p className="card-text mt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat quidem quo ipsa quaerat pariatur vitae veritatis,
                  distinctio maxime sed asperiores.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkArea;
