import React, { useState } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import "./Servicedetails.css";

const Servicedetails = ({ service }) => {
  const [isbook, setIsbook] = useState(true);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
      data.tour = service;
      
      fetch('http://localhost:5000/booking', {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => console.log(result))
  };
  const handleBooking = () => {
    setIsbook(false);
  };

  return (
    <>
      {isbook ? (
        <Card className="my-5 mx-auto card service-details-card">
          <Card.Img variant="top" src={service?.img} />
          <Card.Body>
            <Card.Title className="name">{service?.name}</Card.Title>
            <Card.Text>{service?.description}</Card.Text>
            {/* <NavLink to="/booking" className="contact">
         Take an Appointment <i className="fas fa-arrow-alt-circle-right"></i>
       </NavLink> */}
            <button onClick={handleBooking} className="contact">
              Booking <i className="fas fa-arrow-alt-circle-right"></i>
            </button>
          </Card.Body>
        </Card>
      ) : (
        <div className="pt-5 login-form">
          <h1 className="mb-4">Give us information for Booking</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
              <input
                {...register("username")}
                placeholder="Your Name"
                defaultValue={user.displayName}
              />
              <input
                {...register("userreceiveplace")}
                placeholder="Enter City name from where we will receive you"
              />
              <input {...register("usergender")} placeholder="Gender" />
              <input
                type="number"
                {...register("userage")}
                placeholder="Your Age"
              />
              <input
                type="number"
                {...register("userpassport")}
                placeholder="Your Passport Number"
              />
              <input
                {...register("userdate")}
                placeholder="Enter Your tour starting date"
              />
              <input
                {...register("useremail")}
                placeholder="Your Email"
                defaultValue={user.email}
              />
              <input
                {...register("userdestination")}
                placeholder="Your Destination"
                defaultValue={`You are going to ${service?.name}`}
              />
            </div>

            <input className="login-btn" type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default Servicedetails;
