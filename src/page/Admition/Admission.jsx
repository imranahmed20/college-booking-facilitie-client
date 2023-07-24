import React, { useEffect, useState } from 'react';
import Name from '../Name/Name';

const Admission = () => {
    const [name, setName] = useState([])
    useEffect(() => {
        fetch('https://collage-booking-server-ecru.vercel.app/name')
            .then(res => res.json())
            .then(data => {
                setName(data)
                console.log(data)
            })
    })
    return (
        <div className='mb-10'>
            <h1 className='text-5xl font-semibold text-white text-center mt-10 mb-16'>Select College</h1>
            <div className='grid grid-cols-3 gap-10 container mx-auto '>
                {
                    name.map(allName => <Name key={allName._id} allName={allName}></Name>)
                }

            </div>

        </div>
    );
};

export default Admission;