import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyCollage = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [myOrders, setMyOrder] = useState([])
    const url = `http://localhost:5000/submit`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h1>{myOrders.length}</h1>

        </div>
    );
};

export default MyCollage;