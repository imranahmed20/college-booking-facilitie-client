import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const AllCollages = () => {
    const [collage, setCollage] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/collage')
            .then(res => res.json())
            .then(data => {
                setCollage(data)
            })
    })
    return (
        <div>
            <h1 className='text-5xl font-semibold text-white text-center mt-10 mb-16'>All College</h1>
            <div className='grid grid-cols-3 gap-5 container mx-auto'>
                {
                    collage.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
                }

            </div>

        </div>
    );
};

export default AllCollages;
