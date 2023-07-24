import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyCollageDetail from '../MyCollageDetail/MyCollageDetail';

const MyCollage = () => {
    const { user } = useContext(AuthContext)
    const [myCollage, setMyCollage] = useState([])
    const url = `https://collage-booking-server-ecru.vercel.app/submit?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyCollage(data)

            })
    }, [])
    return (
        <div className='m-8'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Birth</th>
                            <th>Subject</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCollage.map(collage => <MyCollageDetail key={collage._id} collage={collage}></MyCollageDetail>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCollage;