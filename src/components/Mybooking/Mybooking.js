import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Mybooked from "../MyBooked/Mybooked";
import './Mybooking.css'

const Mybooking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://secret-plateau-40724.herokuapp.com/booking")
      .then((res) => res.json())
      .then((results) => {
        const bookingCheak = results.filter(
          (result) => result.useremail === user.email
        );
        setBookings(bookingCheak);
      });
  }, []);
  console.log(bookings);
  return (
    <div className="my-5">
      <h1 className="my-booking">WOW ! You Have Booked {bookings.length} Plan !</h1>
      <Row xs={1} md={2} lg={3} className="m-0 g-4">
        {bookings.map((booking) => (
          <Mybooked key={booking._id} service={booking}></Mybooked>
        ))}
      </Row>
    </div>
  );
};

export default Mybooking;
