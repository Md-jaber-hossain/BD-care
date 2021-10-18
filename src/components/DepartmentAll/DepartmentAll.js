import React from 'react';
import "./DepartmentAll.css"

const DepartmentAll = (props) => {
    const { id, img, name, description } = props.submedical
    return (
        // display department card
        <div>
            <div className="col">
                <div className="h-100 department-card-styles">
                    <div className="text-center">
                        <img src={img} className="review-img-style m-4" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center text-danger fw-bold">{name}</h5>
                        <p className="card-title text-center text-secondary">{description.slice(0,200)}...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentAll;