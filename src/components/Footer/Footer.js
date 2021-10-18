import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          {/* Footer body */}
          <div className="row">
            <div className="col-md-6">

              <div className="mb-5">
                <h1 className="fw-bold">BD <span className="text-danger">Care</span></h1>
              </div>
              {/* Social media Icon for footer*/}
              <div className="d-flex my-5">
                <div className="fs-3">
                  <i className="fab fa-facebook-square"></i>
                </div>
                <div className="fs-3 twitter ms-4">
                  <i className="fab fa-twitter-square"></i>
                </div>
                <div className="fs-3 ms-4">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="fs-3 ms-4">
                  <i className="fab fa-reddit-square"></i>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <h4 className="border-style">About Us</h4>
              <p>Provide Best Treatment</p>
              <p>All time support</p>
              <p>Free medical facilities</p>
              <p>24 hour service</p>
            </div>
            <div className="col-md-3">
              <h4 className="border-style2">Our Service</h4>
              <p>Low cost operation</p>
              <p>Treatment first</p>
              <p>No extra cost</p>
              <p>Offer for poor</p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <div>
              <p className="text-secondary">
                <small>Copyright © .Jaber, All rights reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
