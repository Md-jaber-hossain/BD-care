import React, { useEffect, useState } from 'react';
import useMedical from '../../hooks/useMedical';
import DepartmentAll from '../DepartmentAll/DepartmentAll';

const Department = () => {
    const { medical } = useMedical();
    return (
        // Extra one of two pages that shows medical department 
        <>
            <div className="container mt-5 mb-5">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold">Medical <span className="text-danger"> Departments</span></h2>
                    <p className="text-secondary text-center">Our medical departments are best for service.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        medical.slice(12, 18).map(submedical => <DepartmentAll
                            key={submedical.id}
                            submedical={submedical}>
                        </DepartmentAll>)
                    }
                </div>
            </div>
        </>
    );
};

export default Department;