import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="pt-md-5 pd-md-2 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Our Products</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="">Account</a>
              </li>

              <li className="mb-2">
                <a href="">Bundle</a>
              </li>

              <li className="mb-2">
                <a href="">Blog</a>
              </li>

              <li className="mb-2">
                <a href="">Contact</a>
              </li>

              <li className="mb-2">
                <a href="">Circular</a>
              </li>

              <li className="mb-2">
                <a href=""></a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Home</a>
              </li>

              <li className="mb-2">
                <a href="#about">About Us</a>
              </li>

              <li className="mb-2">
                <a href="">Work</a>
              </li>

              <li className="mb-2">
                <a href="">Service</a>
              </li>

              <li className="mb-2">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Terms</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="">Refund Policy</a>
              </li>

              <li className="mb-2">
                <a href="">Privacy Policy</a>
              </li>

              <li className="mb-2">
                <a href="">License</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Search Here</h3>
            <form action="" className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here"
                />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </form>

            <h3>Follow Us On</h3>
            <ul className="list-unstyled social">
              <li className="mb-2">
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li className="mb-2">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li className="mb-2">
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li className="mb-2">
                <a href="">
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
              <li className="mb-2">
                <a href="">
                  <i class="bi bi-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        {/* CopyRight Area */}
        <div className="row mt-4 mb-1">
          <div className="col-md-12 text-center">
            <p className="fw-bolder fs-5">
              &copy; All rights reserved by Varad Mule
            </p>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
