import React, { useState } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import "./Servicedetails.css";

const Servicedetails = ({ service }) => {
  const [isbook, setIsbook] = useState(true);
  const [isbooked, setIsbooked] = useState(true);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.tour = service;

    fetch("https://secret-plateau-40724.herokuapp.com/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Congratulation! Your booking conformed !");
          setIsbooked(false);
        }
      });
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
        <>
          {isbooked ? (
            <div className="pt-5 login-form">
              <h1 className="mb-4">Give us information for Booking</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                  <input
                    {...register("username")}
                    placeholder="Your Name"
                    defaultValue={user.displayName}
                    required
                  />
                  <input
                    {...register("userreceiveplace")}
                    placeholder="Enter City name from where we will receive you"
                    required
                  />
                  <input {...register("usergender")} placeholder="Gender" required />
                  <input
                    type="number"
                    {...register("userage")}
                    placeholder="Your Age"
                    required
                  />
                  <input
                    type="number"
                    {...register("userpassport")}
                    placeholder="Your Passport Number"
                    required
                  />
                  <input
                    {...register("userdate")}
                    placeholder="Enter Your tour starting date"
                    required
                  />
                  <input
                    {...register("useremail")}
                    placeholder="Your Email"
                    defaultValue={user.email}
                    required
                  />
                  <input
                    {...register("userdestination")}
                    placeholder="Your Destination"
                    defaultValue={`You are going to ${service?.name}`}
                    required
                  />
                </div>

                <input className="login-btn" type="submit" />
              </form>
            </div>
          ) : (
            <div className="login-form">
              <h1>Successfully Booked this plan !</h1>
              <NavLink className="contact" to="/mybooking">
              Your all Booked Plan <i class="fas fa-arrow-alt-circle-right"></i>
              </NavLink>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Servicedetails;
