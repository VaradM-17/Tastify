import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header id="main_menu">
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <a href="#" className="nav-brand">
            <img src={logo} alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div id="mainmenu" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto" id="navbar">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#work" className="nav-link">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a href="#service" className="nav-link">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
