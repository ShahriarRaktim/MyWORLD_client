import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allplan from '../Allplan/Allplan';

const Allplans = () => {
    const [plans, setPlans] = useState([])
    useEffect(() => {
        fetch("https://secret-plateau-40724.herokuapp.com/booking")
          .then((res) => res.json())
          .then((results) => setPlans(results));
      }, []);
      console.log(plans)
      console.log("ok")
    return (
        <div className="mt-5">
      <h1 className="mt-5">Those are all the Plans that Have Booked !</h1>
      <Row xs={1} md={2} lg={3} className="m-0 g-4">
        {plans.map((plan) => (
          <Allplan key={plan._id} service={plan}></Allplan>
        ))}
      </Row>
    </div>
    );
};

export default Allplans;