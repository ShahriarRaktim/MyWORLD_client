import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Homeservices from "../Homeservices/Homeservices";

import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://secret-plateau-40724.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      {/* Banar Section */}
      <section className="banar">
        <h1>
          <span>BEST</span> Tour Management
        </h1>
        <NavLink to="/home" className="about">
          About Us <i class="fas fa-arrow-alt-circle-right"></i>
        </NavLink>
      </section>
      {/* Second Section */}
      <section className="doc-team">
        <div>
          <img src="https://i.ibb.co/DWg12jv/10476-min.jpg" alt="" />
        </div>
        <div>
          <div className="information">
            <h1>MyWORLD</h1>
            <h2>Complete Preparation Here For Enjoying A Tour</h2>
            <p>
            Traveling is a quintessential part of enriching our lives and building out new memories. You see new sites, try new foods, hear new languages, and learn new things which lead to new positive memories.
            </p>
            <div className="all-info">
              <div className="info">
                <h3>
                  <i class="fas fa-briefcase-medical"></i>
                </h3>
                <div>
                  <h4>Quality of Care Services</h4>
                  <p>
                  The Tour Guy we believe that living a long life is more than how many years pass you by. We believe the best way to live a long life is to accrue as many memories as possible.
                  </p>
                </div>
              </div>

              <div className="info">
                <h3>
                <i class="fas fa-plane"></i>
                </h3>
                <div>
                  <h4>Standards of Plane</h4>
                  <p>
                  No single country or event can take credit for evolving the arts but the Renaissance in Florence brought it back to life in Europe. Navigate Europe’s top museums to help plan your trip.
                  </p>
                </div>
              </div>

              <div className="info">
                <h3>
                  <i class="fas fa-clock"></i>
                </h3>

                <div>
                  <h4>Time Management</h4>
                  <p>
                    Time is the continued sequence of existence and events that
                    occurs in an apparently irreversible succession from the
                    past, through the present
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/home" className="contact">
            More <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </div>
      </section>
      {/* Service Section */}
      <section>
        <div className="services">
          <h1>Management Service</h1>
          <h2>Our MyWORLD Service</h2>
          <p>
            As you continue to keep tabs on the <span>MyWORLD</span>{" "}
            industry, don’t forget to prioritize the deep-seated passion you’ve
            been feeling to propel your career forward.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {services.map((service) => (
            <Homeservices key={service.id} service={service}></Homeservices>
          ))}
        </Row>
      </section>
      {/* Review Section */}
      <section>
        <div className="services">
          <h1>Review</h1>
          <h2>Our Peace Here </h2>
        </div>
        <div className="review">
          <img
            src="https://i.ibb.co/frWGpQp/pexels-august-de-richelieu-4260644-min.jpg"
            alt=""
          />
          <p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>

          <h4>
          We booked a flight with this airline for myself and family members in 3 months advance. Just 10 days prior to the departure, I received an email stating that the airline has canceled the flight. So I had to book that same route flight almost 3 times costlier than the previously booked one. Never Book flight with this airline.Time is the continued sequence of existence and events that
            occurs in an apparently irreversible succession from the past,
            through the present
          </h4>
        </div>
        <div className="review">
          <img
            src="https://i.ibb.co/c2kZZmH/pexels-julia-avamotive-1236678.jpg"
            alt=""
          />
          <p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>

          <h4>
          Awesome!I called flight care they offered they have one flight at 3.30 am if you can make it we can book We booked a flight with this airline for myself and family members in 3 months advance. Just 10 days prior to the departure, I received an email stating that the airline has canceled the flight. So I had to book that same route flight almost 3 times costlier than the previously booked one. Never Book flight with this airline.Time is the continued sequence of existence and events that
            occurs in an apparently irreversible succession from the past,
            through the present
          </h4>
          <NavLink to="/home" className="contact">
            More Reviews <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
