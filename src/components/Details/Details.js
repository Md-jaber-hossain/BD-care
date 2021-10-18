import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useMedical from '../../hooks/useMedical';
import "./Details.css"

const Details = () => {

    const { id } = useParams();
    const { medical } = useMedical();

    const detailsMatchedCard = medical?.find(submedical => submedical.id === parseInt(id));
    // console.log(detailsMatchedCard);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center my-5">
                    <div>
                        <h1>{detailsMatchedCard?.name}</h1>
                        <p>{detailsMatchedCard?.description2}</p>
                        <div className=" d-flex">
                            <h2>$ {detailsMatchedCard?.cost}</h2>
                        </div>
                        <Link to="/home"><button className="item-add-btn-style mt-3"> Home </button></Link>
                    </div>
                </div>
                <div className="col-md-6 my-5">
                    <img className="img-fluid" src={detailsMatchedCard?.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Details;
