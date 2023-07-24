import React from 'react';
import { Link } from 'react-router-dom';

const Booking = ({ booking }) => {
    const { _id, collegeName, collegeImage, admissionDate, collegeDetail } = booking;
    return (       
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{collegeName}</h2>
                    <h4 className="text-xl font-semibold">Admission Date: {admissionDate}</h4>
                    <p>{collegeDetail}</p>
                    <div className="card-actions ">
                        <Link to={`/collage/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Booking;