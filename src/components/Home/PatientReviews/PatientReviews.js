import React from 'react';
import { Link } from 'react-router-dom';

const PatientReviews = () => {
    return (
        // patient review display card
        <div id="patient-reviews">
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Review <span className="text-danger"> From</span> Our <span className="text-danger">Patient</span></h2>
                        <p className="text-secondary text-center">We patient gave us best motivation to work harder.</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="h-100 revies-card-styles">
                            <div className="text-center">
                                <img src="https://i.ibb.co/6Bh1MzM/national-cancer-institute-g-O-i-ULv-qb-U-unsplash.jpg" className="review-img-style m-4" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-center text-danger fw-bold">Lora mart</h5>
                                <p className="card-text text-secondary">I am a cancer patient and i get support from this madical all time.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 revies-card-styles">
                            <div className="text-center">
                                <img src="https://i.ibb.co/yYb3ZWg/gregory-hayes-h5cd51-KXm-RQ-unsplash.jpg" className="review-img-style m-4" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-danger fw-bold">Maahew watt</h5>
                                <p className="card-text text-secondary">It's a complete halth care madical for all. They just juide us as their best.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 revies-card-styles">
                            <div className="text-center">
                                <img src="https://i.ibb.co/VHy98p4/foto-sushi-6anudmp-ILw4-unsplash.jpg" className="review-img-style m-4" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-danger fw-bold">James folk</h5>
                                <p className="card-text text-secondary">I was a patients for surgery and at very low cost. it's all cover.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientReviews;