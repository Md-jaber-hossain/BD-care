import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    // Header section implementation
    <div className="">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active black1">
            <img src="https://i.ibb.co/hZG8J1Z/markus-frieauff-IJ0-Ki-Xl4uys-unsplash.jpg" class="d-block w-100 img-height" alt="..." />
            <div class="carousel-caption detail-margin">
              <h2>Best Medical Service</h2>
              <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury.</p>
              <Link to="/department"><button className="btn btn-danger text-white">More Details</button></Link>
            </div>
          </div>
          <div class="carousel-item black1">
            <img src="https://i.ibb.co/frjfgmK/myriam-zilles-Klto-LK6-Mk-g-unsplash.jpg" class="d-block w-100 img-height" alt="..." />
            <div class="carousel-caption detail-margin">
              <h2>Fast Treatment for All</h2>
              <p>We are providing Best Medical Services in over 30 specialties including cardiac surgery, cardiology, bone marrow transplant.</p>
              <Link to="/department"><button className="btn btn-danger text-white">More Details</button></Link>
            </div>
          </div>
          <div class="carousel-item black1">
            <img src="https://i.ibb.co/H2g5FM5/mockup-graphics-i1iq-QRLULlg-unsplash.jpg" class="d-block w-100 img-height" alt="..." />
            <div class="carousel-caption detail-margin">
              <h1>24 Hours medical Facilities</h1>
              <p>Welcome to our Medical Center, Bangladeshi nationals are required to be examined and issued a Medical Fitness Certificate.</p>
              <Link to="/department"><button className="btn btn-danger text-white">More Details</button></Link>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;