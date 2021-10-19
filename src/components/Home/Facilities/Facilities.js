import React from 'react';
import { Link } from 'react-router-dom';
import "./Facilities.css"

const Facilities = () => {
    return (
        // facilities information show
        <>
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Our <span className="text-danger"> Facilities</span></h2>
                        <p className="text-secondary text-center">We always stand for helping our patient</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row mx-auto">
                    {/* <div className="col-lg-12"> */}
                    <div className="card mb-6 facilities-card-shadow">
                        <div className="row g-0 text-lg-start text-center">
                            <div className="col-md-6">
                                <div className="p-3">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img height="350px" src="https://i.ibb.co/Wn28vF7/marcel-scholte-LPur-Jnihm-QI-unsplash.jpg" className="d-block w-100 facility-img-rounded" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img height="350px" src="https://i.ibb.co/6m2J0pZ/cdc-Gn-Luu-G9cr-EY-unsplash.jpg" className="d-block w-100 facility-img-rounded" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img height="350px" src="https://i.ibb.co/vvMB1hN/national-cancer-institute-o-CLu-Fi9-GYNA-unsplash.jpg" className="d-block w-100 facility-img-rounded" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3 className="card-title fw-bold">Our Health Facilities</h3>
                                    <p className="card-text text-secondary">Health facilities are places that provide health care. They include hospitals, clinics, outpatient care centers, and specialized care centers.</p>
                                    <p className="card-text text-danger"> <b>We provide:</b> </p>
                                    <p className="card-text "> 24 hour and seven days a week medical treatment. </p>
                                    <p className=""><small>Full day AC and generator is open for doctor and patient.</small></p>
                                    <p className=""><small>Operator is completed by expert doctors and ICU is provided if patient needed.</small></p>
                                    <p className=""><small>We have used mordern technologies for creating better service and well treatment.</small></p>
                                    <Link to="/department"><button className="btn btn-danger">Details <i className="fas fa-angle-double-right"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default Facilities;