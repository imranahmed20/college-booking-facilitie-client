import React, { useEffect, useState } from 'react';
import data from '../../../../public/data/data.json'

const Collage = () => {
    const [collage, setCollage] = useState([])
    useEffect(() => {
        fetch(`{data}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    })
    return (
        <div>
            <h1 className='text-5xl font-semibold text-white text-center mt-40 mb-16'>Popular Courses</h1>
            <div className='grid grid-cols-3 gap-5'>

            </div>

        </div>
    );
};

export default Collage;