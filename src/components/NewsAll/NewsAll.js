import React from 'react';
import { Link } from 'react-router-dom';
import "./NewsAll.css"

const NewsAll = (props) => {
    const { id, img, name, description, category } = props.submedical
    return (
        // Display news card that is one of the two extra private section
        <div>
            <div className="col">
                <div className="h-100 home-card-styles">
                    <div className="height-news-img">
                        <img src={img} className="card-img-top height-news-img" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">{category}</h5>
                        <h5 className="card-title text-center text-danger">{name}</h5>
                        <p className="card-text">{description.slice(0,170)}...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsAll;