import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='item-one md:p-40'>
                <h1 className='text-7xl font-bold text-white text-center'>WELCOME TO <span className='text-orange-500'>UNIVERSITY</span></h1>
                <p className='text-xl mt-8 mb-10 text-white md:mx-40 sm:mx-0 text-center'>Here is an example Paragraph on the topic of My University. This paragraph was written by one of the best essay writers.I hope you will find this sample the best one</p>
                <div className='text-center'>
                    <button className="btn btn-warning mr-10 px-8 bg-orange-500 text-white">ALL COURSES</button>
                    <button className="btn btn-outline px-8 text-white">Read More</button>
                </div>
            </div>
        </>

    );
};

export default Banner;