import React from 'react';
import { Card, Col } from "react-bootstrap";
const Allplan = ({service}) => {
    console.log(service)
    const { name, summary, img } = service.tour;
    const {username, userreceiveplace, useremail, userage, usergender, userdate} = service;
    const handleDeleteAdmin=id=>{
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
            <Card.Title className="name">{username} is going to {name} from {userreceiveplace} on {userdate}</Card.Title>
            <h3>{useremail}</h3>
            <h3>{userage} Years old {usergender}</h3>
            <Card.Text>{summary}</Card.Text>
            <button onClick={()=>handleDeleteAdmin(service._id)} className='delete'>Delete</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Allplan;