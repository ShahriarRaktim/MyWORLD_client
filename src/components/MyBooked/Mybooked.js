import React, { useState } from 'react';
import { Card, Col } from "react-bootstrap";
import './Mybooked.css'

const Mybooked = ({service}) => {
    const { name, summary, img } = service.tour;
    const [ispending, setIspending] = useState(true)
    const handlePending =()=>{
      setIspending(false)
    }
    const handleDelete=id=>{
      fetch(`https://secret-plateau-40724.herokuapp.com/booked/${id}`,{
        method: "DELETE",
      })
      .then(res => res.json())
      .then(result =>{
        if(result.deletedCount===1){
          alert('Successfully Deleted !')
          window.location.reload();
        }
      })
    }
    return (
        <Col>
        <Card className="m-3 card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="name">Your are going to {name} on {service.userdate}</Card.Title>
            <Card.Text>{summary}</Card.Text>
            <button onClick={()=>handleDelete(service._id)} className='delete pending1'>Delete</button>
            {
              ispending ? <button onClick={handlePending} className='contact pending2'>Pending</button>
              : <button className='contact pending2'>Booked</button>
            }
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Mybooked;