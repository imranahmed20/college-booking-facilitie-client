import React from 'react';
import errorImage from '../assets/image/error.avif'

const Error = () => {
    return (
        <div>
            <img className='align-middle' src={errorImage} alt="" />
            <button className="btn btn-primary mt-5 ">Go to Home</button>
        </div>
    );
};

export default Error;