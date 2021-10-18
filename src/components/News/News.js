import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useMedical from '../../hooks/useMedical';
import NewsAll from '../NewsAll/NewsAll';

const News = () => {
    
    const { medical } = useMedical();
    return (
        // Call news card that is one of the two extra private section
        <>
            <div className="container mt-5 mb-5">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold">Top <span className="text-danger"> News</span> For <span className="text-danger">Health</span></h2>
                    <p className="text-secondary text-center">Medical news for getting update.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        medical.slice(6, 12).map(submedical => <NewsAll
                            key={submedical.id}
                            submedical={submedical}>
                        </NewsAll>)
                    }
                </div>
            </div>
        </>
    );
};

export default News;