import React from 'react';
import gallery1 from '../../../assets/image/graduate-1.avif'
import gallery2 from '../../../assets/image/graduate-2.avif'
import gallery3 from '../../../assets/image/graduate-3.avif'
import gallery4 from '../../../assets/image/graduate-4.avif'
import gallery5 from '../../../assets/image/graduate-7.avif'
import gallery6 from '../../../assets/image/graduate-6.avif'

const Gallery = () => {
    return (
        <>
            <div className='container mx-auto'>
                <h1 className='text-5xl font-bold text-orange-500 text-center mt-40 mb-16'>Our Gallery</h1>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
                    <div>
                        <img src={gallery1} alt="" />
                    </div>
                    <div>
                        <img src={gallery4} alt="" />
                    </div>
                    <div>
                        <img src={gallery3} alt="" />
                    </div>
                    <div>
                        <img src={gallery2} alt="" />
                    </div>
                    <div>
                        <img src={gallery5} alt="" />
                    </div>
                    <div>
                        <img src={gallery6} alt="" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Gallery;