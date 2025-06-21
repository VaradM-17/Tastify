import React from "react";
import bannerOne from "../assets/images/banner_01.jpg";
import bannerTwo from "../assets/images/banner_02.jpg";
import bannerThree from "../assets/images/banner_03.jpg";

const Carousel = () => {
  return (
    <section
      id="slider"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerOne} alt="#" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={bannerTwo} alt="#" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={bannerThree} alt="#" className="d-block w-100" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </section>
  );
};

export default Carousel;
