import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Collage = () => {
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
            <h1 className='text-5xl font-semibold text-white text-center mt-40 mb-16'>Popular Courses</h1>
            <div className='grid grid-cols-3 gap-5 container mx-auto'>
                {
                    collage.map(booking => <Card key={booking._id} booking={booking}></Card>)
                }

            </div>

        </div>
    );
};

export default Collage;