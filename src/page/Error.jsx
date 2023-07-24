import React from 'react';
import errorImage from '../assets/image/error.avif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-4 my-6 rounded-lg' src={errorImage} alt="" />
            <Link to='/'> <button className="btn btn-primary mt-5">Go to Home</button></Link>
        </div>
    );
};

export default Error;