import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useMedical from '../../hooks/useMedical';
import "./Details.css"

const Details = () => {
    // dynamic id for details
    const { id } = useParams();
    const { medical } = useMedical();

    const detailsMatchedCard = medical?.find(submedical => submedical.id === parseInt(id));

    // dynamic services information show
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 my-5">
                    <img className="img-fluid rounded-3" src={detailsMatchedCard?.img} alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="text-danger">{detailsMatchedCard?.name}</h1><br />
                        <p><b>Description:</b><br /><span className="text-secondary">{detailsMatchedCard?.description}</span></p><br />
                        <p> <b>More Info:</b><br /> {detailsMatchedCard?.description2}</p>
                        <div className=" d-flex">
                            <h2>$ {detailsMatchedCard?.cost}</h2>
                        </div>
                        <Link to="/appointment"><button className="item-add-btn-style mt-3">Appointment <i className="fas fa-angle-double-right"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
