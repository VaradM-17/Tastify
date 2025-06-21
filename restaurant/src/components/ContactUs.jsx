import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="pb-md-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6 offset-md-3">
              <div className="card p-4 text-center">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form action="" className="mt-3 text-start">
                  <label htmlFor="" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Name"
                  />

                  <label htmlFor="" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Enter Your Email"
                  />

                  <label htmlFor="" className="form-label">
                    Your Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Name"
                  />

                  <label htmlFor="" className="form-label">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Your Name"
                  />

                  <label htmlFor="" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="form-control mb-4"
                  ></textarea>

                  <div className="text-center">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
