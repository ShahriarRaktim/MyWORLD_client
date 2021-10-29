import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Mybooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch("http://localhost:5000/booking")
        .then(res => res.json())
        .then(results => {
            const bookingCheak = results.filter(result => result.useremail === user.email)
            setBooking(bookingCheak);
        })
    },[])
    console.log(booking)
    return (
        <div>
            <h1 className="mt-5">hi</h1>
        </div>
    );
};

export default Mybooking;