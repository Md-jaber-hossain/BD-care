import React from 'react';
import { Link } from 'react-router-dom';

const ExpertDoctors = () => {
    return (
        // Display doctors four card
        <div id="expert-doctors">
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Our <span className="text-danger"> Specialized</span> Doctor <span className="text-danger">!!</span></h2>
                        <p className="text-secondary text-center">We provide you best specialized doctors.</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="h-100 home-card-styles">
                            <img src="https://i.ibb.co/QdNsvXQ/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title text-center text-danger fw-bold">Dr. Mat andew</h5>
                                <p className="card-text text-secondary ">She is a dentist, also known as a dental surgeon, is a medical professional who specializes in dentistry.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 home-card-styles">
                            <img src="https://i.ibb.co/WHShtNw/johny-georgiadis-3ewk-Nkf-Jj2k-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title text-danger fw-bold">Dr. Tom and Helly</h5>
                                <p className="card-text text-secondary">They are medical test specialist. They can help detect a condition, determine a diagnosis, plan treatment.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 home-card-styles">
                            <img src="https://i.ibb.co/cJqVpbq/humberto-chavez-FVh-yq-LR9e-A-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title text-danger fw-bold">Dr. Antroni</h5>
                                <p className="card-text text-secondary">She is anesthesiologst. Her medical specialty concerned with the total perioperative care of patients for surgery.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 home-card-styles">
                            <img src="https://i.ibb.co/NtMvQqw/austin-distel-7b-Mdi-Iqz-J4-unsplash.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title text-danger fw-bold">Dr. Austin</h5>
                                <p className="card-text text-secondary">He is medicine specialist. He can help anyone to reduce mental and physical health. He gives best treatment.</p>
                                <Link to="/department" className="text-decoration-none text-danger">See more <i class="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctors;