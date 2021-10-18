import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeServices.css"

const HomeServices = (props) => {
    const { id, img, name, description } = props.submedical
    return (
        <>
            <div class="col">
                <div class="h-100 home-card-styles">
                    <div className="text-center">
                        <img src={img} className="service-img-style m-4" alt="..." />
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">{name}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`/details/${id}`}><button className="btn-style mt-3">Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeServices;