import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMedical from '../../hooks/useMedical';
import HomeServices from '../HomeServices/HomeServices';
import ExpertDoctors from './ExpertDoctors/ExpertDoctors';
import Facilities from './Facilities/Facilities';
import Header from './Header/Header';
import "./Home.css"
import PatientReviews from './PatientReviews/PatientReviews';

const Home = () => {

    const { medical } = useMedical();
    return (
        // Header , home service, review, doctors information call
        <>
            <Header></Header>
            <div id="services" className="container mt-5 mb-5">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold">Our <span className="text-danger"> Services</span> For <span className="text-danger">You</span></h2>
                    <p className="text-secondary text-center">We provide you best medical services.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        medical.slice(0, 6).map(submedical => <HomeServices
                            key={submedical.id}
                            submedical={submedical}>
                        </HomeServices>)
                    }
                </div>
            </div>

            {/* Our facilities */}

            <Facilities></Facilities>

            {/*--------- Patient reviews ------------*/}

            <PatientReviews></PatientReviews>

            {/* --------Specialized doctors card------- */}

            <ExpertDoctors></ExpertDoctors>

        </>
    );
};

export default Home;

