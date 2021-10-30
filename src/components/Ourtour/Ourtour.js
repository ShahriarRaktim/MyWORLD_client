import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Ourtour = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://secret-plateau-40724.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
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
            <Tour key={service.id} service={service}></Tour>
          ))}
        </Row>
      </section>
        </div>
    );
};

export default Ourtour;