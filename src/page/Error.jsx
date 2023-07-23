import React from 'react';
import errorImage from '../assets/image/error.avif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img className='align-middle' src={errorImage} alt="" />
            <Link to='/'> <button className="btn btn-primary mt-5">Go to Home</button></Link>
        </div>
    );
};

export default Error;