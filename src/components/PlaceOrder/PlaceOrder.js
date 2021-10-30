import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Servicedetails from "../Servicedetails/Servicedetails";

const PlaceOrder = () => {
    const { planid } = useParams();
    const [services, setServices] = useState([]);
  
    useEffect(() => {
      fetch("https://secret-plateau-40724.herokuapp.com/plans")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    

    const service = services.find((e) => e._id === planid);
  
    return <>{<Servicedetails service={service}></Servicedetails>}</>;
  };
  

export default PlaceOrder;