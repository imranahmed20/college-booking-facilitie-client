import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Booking = ({ booking }) => {
    const { _id, collegeName, collegeImage, admissionDate, collegeDetail, researchHistoryDetail, sports } = booking;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={collegeImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{collegeName}</h2>
                <h4 className="text-xl font-semibold">Admission Date: {admissionDate}</h4>
                <h4 className="text-xl font-semibold">Sports: {sports}</h4>
                <div className='flex '>
                    <h2 className='mr-3'> Rating: </h2>
                    <span><FaStar className='text-orange-400 text-2xl mr-2'></FaStar></span><span><FaStar className='text-orange-400 text-2xl mr-2'></FaStar></span><span><FaStar className='text-orange-400 text-2xl mr-2'></FaStar></span><span><FaStar className='text-orange-400 text-2xl mr-2'></FaStar></span><span><FaStarHalfAlt className='text-orange-400 text-2xl'></FaStarHalfAlt></span></div>
                <div className="card-actions ">
                    <Link to={`/collage/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Booking;