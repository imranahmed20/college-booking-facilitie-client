import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CollageDetail = () => {
    const details = useLoaderData()
    const { _id, collegeName, collegeImage, admissionDate, collegeDetail, researchHistoryDetail, sports } = details;
    return (
        <div>
            hello
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={collegeImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-5">{collegeName}</h1>
                        <h4 className="text-xl font-semibold mb-3">Admission Date: {admissionDate}</h4>
                        <h4 className="font-semibold mb-3"> Research History: {researchHistoryDetail}</h4>
                        <h4 className=" font-semibold mb-1">Sports: {sports}</h4>
                        <p>{collegeDetail}</p>
                        <Link to="/">  <button className="btn btn-primary mt-1">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageDetail;