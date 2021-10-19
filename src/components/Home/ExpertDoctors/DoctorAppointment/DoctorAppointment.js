import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import "./DoctorAppointment.css"

const DoctorAppointment = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <>
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Doctor <span className="text-danger"> Appointment</span> Form <span className="text-danger">!!</span></h2>
                        <p className="text-secondary text-center">Book your appontment here for getting treatment.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center mt-3 mb-5">
                        {/* --------Patient information------------ */}
                        <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="text-secondary">Patient Information</h3>
                            <hr />
                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="Date of Birth" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} /> <br />

                            {/* ------Appoimntment information------ */}
                            <h3 className="text-secondary">Appointment Information</h3>
                            <hr />
                            <input type="date" defaultValue="2021-10-19" />
                            <input id="appt-time" type="time" name="appt-time" defaultValue="12:30" />

                            <div className="col-auto mt-3 w-75">
                                <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                <select className="form-select" id="autoSizingSelect">
                                    <option defaultValue>Problem...</option>
                                    <option defaultValue="1">Medicine</option>
                                    <option defaultValue="2">Orthopedic</option>
                                    <option defaultValue="3">Eye</option>
                                    <option defaultValue="4">Dental</option>
                                    <option defaultValue="5">Heart</option>
                                    <option defaultValue="6">Diadetis</option>
                                    <option defaultValue="7">Skin</option>
                                    <option defaultValue="8">Health</option>
                                </select>
                            </div>
                            <Link to="/appointmentcomplete" className="appointment-btn"><input className="bg-danger text-white fw-bold" type="submit" /></Link>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img src="https://i.ibb.co/2swNbyy/undraw-medical-research-qg4d.png" alt="" className="img-fluid" />
                </div>
            </div>
        </>
    );
};

export default DoctorAppointment;