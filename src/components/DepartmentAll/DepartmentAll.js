import React from 'react';
import "./DepartmentAll.css"

const DepartmentAll = (props) => {
    const { id, img, name, description } = props.submedical
    return (
        <div>
            <div class="col">
                <div class="h-100 department-card-styles">
                    <div className="text-center">
                        <img src={img} class="review-img-style m-4" alt="..." />
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title text-center text-danger fw-bold">{name}</h5>
                        <p class="card-title text-center text-secondary">{description.slice(0,200)}...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentAll;