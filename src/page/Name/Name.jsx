import React from 'react';
import { Link } from 'react-router-dom';

const Name = ({ allName }) => {
    const { _id, collegeName } = allName;
    console.log(allName)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">

                <Link><h2 className="card-title text-2xl">{collegeName}</h2></Link>
            </div>

        </div>
    );
};

export default Name;