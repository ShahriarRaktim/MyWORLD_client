import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import docTeam from "../../image/10476.jpg";
// import Homeservice from "../Homeservices/Homeservice";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Banar Section */}
      <section className="banar">
        <h1>
          <span>BEST</span> Tour Management
        </h1>
        <NavLink to="/ourdoctors" className="about">
          About Us <i class="fas fa-arrow-alt-circle-right"></i>
        </NavLink>
      </section>
      {/* Second Section */}
      <section className="doc-team">
        <div>
          <img src={docTeam} alt="" />
        </div>
        <div>
          <div className="information">
            <h1>HeavenHEALTH</h1>
            <h2>We Provide Essential Services For Your Health Care</h2>
            <p>
              We treatment in a simple way so that you all can understand a
              particular illness or disease in a better way, get treated in a
              proper way by consulting your family healthcare physician.
            </p>
            <div className="all-info">
              <div className="info">
                <h3>
                  <i class="fas fa-briefcase-medical"></i>
                </h3>
                <div>
                  <h4>Quality of Care Services</h4>
                  <p>
                    Human compassion can be a profession. PSU’s 14 pre-health
                    tracks show you how.
                  </p>
                </div>
              </div>

              <div className="info">
                <h3>
                  <i class="fas fa-hand-holding-medical"></i>
                </h3>
                <div>
                  <h4>Standards of Treatment</h4>
                  <p>
                    Become a next-generation leader. Earn your Master's in
                    Public Service Leadership
                  </p>
                </div>
              </div>

              <div className="info">
                <h3>
                  <i class="fas fa-clock"></i>
                </h3>

                <div>
                  <h4>24/7 Working Time</h4>
                  <p>
                    Time is the continued sequence of existence and events that
                    occurs in an apparently irreversible succession from the
                    past, through the present
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/ourdoctors" className="contact">
            Contact Us <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </div>
      </section>
      {/* Service Section */}
      <section>
        <div className="services">
          <h1>Medical Service</h1>
          <h2>Our HeavenHEALTH Service</h2>
          <p>
            As you continue to keep tabs on the <span>HeavenHEALTH</span>{" "}
            industry, don’t forget to prioritize the deep-seated passion you’ve
            been feeling to propel your career forward.
          </p>
        </div>
        {/* <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {services.map((service) => (
            <Homeservice key={service.id} service={service}></Homeservice>
          ))}
        </Row> */}
      </section>
      {/* Review Section */}
      <section>
        <div className="services">
          <h1>Review</h1>
          <h2>Our Peace Here </h2>
        </div>
        <div className="review">
          <img
            src="https://i.ibb.co/kGqFFKV/genuine-human-facial-expressions-feelings-reaction-good-looking-stylish-retired-man-glasses-shirt-ha.jpg"
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
            I am Devid.I am so happy to get their service.Time is the continued
            sequence of existence and events that occurs in an apparently
            irreversible succession from the past, through the present.Time is
            the continued sequence of existence and events that occurs in an
            apparently irreversible succession from the past, through the
            present.Time is the continued sequence of existence and events that
            occurs in an apparently irreversible succession from the past,
            through the present
          </h4>
          <NavLink to="/ourdoctors" className="contact">
            More Reviews <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
