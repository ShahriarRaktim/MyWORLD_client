import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Tour from "../Tour/Tour";
import './Ourtour.css'

const Ourtour = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://secret-plateau-40724.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className='ourtourimg'>
      <img
        className="w-75 "
        src="https://i.ibb.co/bL8Pc0M/30189-min.jpg"
        alt=""
      />
      <section>
        <div className="services">
          <h1>Management Service</h1>
          <h2>Our MyWORLD Service</h2>
          <p>
            As you continue to keep tabs on the <span>MyWORLD</span> industry,
            don’t forget to prioritize the deep-seated passion you’ve been
            feeling to propel your career forward.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {services.map((service) => (
            <Tour key={service.id} service={service}></Tour>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Ourtour;
