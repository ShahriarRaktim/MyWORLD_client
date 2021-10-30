import React from 'react';
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Mybooked = ({service}) => {
    const { name, summary, img } = service.tour;
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
            <Card.Title className="name">Your ara going to {name}</Card.Title>
            <Card.Text>{summary}</Card.Text>
            <button onClick={()=>handleDelete(service._id)} className='contact'>Delete</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Mybooked;