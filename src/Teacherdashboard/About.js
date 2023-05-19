import React from 'react';
import { Row, Col, CardTitle, Button, CardSubtitle } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';
import user3 from "../assets/images/users/user3.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user1 from "../assets/images/users/user1.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import '../components/Homepage/Homepage.css';

const Abouts = () => {
  const[features ,setfeatures]= useState([]);



  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjZjYTNlMDhmYjBmOTFjN2U2MTE3NiIsImZpcnN0TmFtZSI6IkJpa29yaW1hbmEiLCJsYXN0TmFtZSI6IlNhdXZ1ZXIiLCJlbWFpbCI6IkJpa29yYVNhdXZ1ZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTHRoMzh2SkxveFduVURMYmpISll4ZXEycU5vWkhOTFlGNUtHRXZuR1BoYW1YRzRnM3pEL20iLCJkYXRlT2ZCaXJ0aCI6IjEwLjEwLjEwIiwibGV2ZWwiOiJQcmltYXJ5MSIsInNjaG9vbElkIjoiMjMyNDIiLCJpbWFnZSI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RheGV5bXF2di9pbWFnZS91cGxvYWQvdjE2ODAyNjM3NDEvYzhucGR4ZXZoZ3U3aTRtbGYydTguanBnIiwicm9sZSI6InN0dWRlbnQiLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTMxVDExOjU1OjQyLjk0OFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTMxVDExOjU1OjQyLjk0OFoiLCJfX3YiOjB9LCJpYXQiOjE2ODA0NDA2OTF9.Z6tdKgI4es8rwtIQ45YUH_uPL1RFuFcSG97UHsfhUDM`,
      },
    };
    axios
      .get(
        "https://new-generation.onrender.com/Project/All",
        config
      )
      .then((response) => {
        setfeatures(response.data.projects);
        console.log(typeof features);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: "blue",
    color: "white",
  });
  
  

  const handleApprove = (id, name) => {
  fetch(`https://new-generation.onrender.com/Project/approveProject/${id}`, {
    method: "PATCH",
    headers: {
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjU5MzMxY2JkNTZjYzYwOTI4MmI1NSIsImZpcnN0TmFtZSI6IlByb2YiLCJsYXN0TmFtZSI6IlJlbXkiLCJlbWFpbCI6IlJlbXlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkWXVLc3hvZmFmQXRnbFdFck0yS3pqZVdSeGtoSXN4dlFuSU1RZnZuUWc5ckdrRklwM2FOTXUiLCJkYXRlT2ZCaXJ0aCI6IkhlIGlzIHRoZSBoZWFkIHRlYWNoZXIgb2YgTmV3IGdlbmVyYXRpb24gd2hlcmUgaGUgaGFzIGJ1Y2hlbG9ycyBkZWdyZWUgaW4gaHVtYW4gcmlnaHRzIGFuZCBlY29ub21pY3MgYW5kIGhlIGlzIFRlYWNoZXIgb2YgcHJpbWFyeSB0aHJlZVxyXG4iLCJpbWFnZSI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RheGV5bXF2di9pbWFnZS91cGxvYWQvdjE2ODAxODQxMTMvZnBzbjFnYWl1MmFvMW9qdmpjZzQuanBnIiwicm9sZSI6InRlYWNoZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTMwVDEzOjQ4OjMzLjcyNVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTMwVDEzOjQ4OjMzLjcyNVoiLCJfX3YiOjB9LCJpYXQiOjE2ODA1MzMzMzV9.7j-4_wr5MUZuGMLSKHbadFJ2rsOvkNp_Uj7sezrVeWA",
  }})
    .then(() => {
      // Remove the approved project from the features array
      setfeatures(features.filter(feature => feature._id !== id));
    })
    .catch((error) => {
      console.log(error);
    });



         
         const confirmed = window.confirm(
          `Are you sure you want to approve ${id}?`
        );
    
        if (confirmed) {
          setButtonStyles({
            ...buttonStyles,
            [id]: {
              backgroundColor: "green",
              color: "white",
              borderRadius: "5px",
              height: "36px",
            },
          });
        }
     };


  
       
      

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
      
        <ComponentCard title="Student Projects to be Posted">
          <Row>
            {features.map((feature) => (
              <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                <div>
                <iframe width="360" height="192" src={feature.Video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                  <CardTitle tag="h4" className="my-3">
                  {feature.student.firstName + " "+ feature.student.lastName}
                  </CardTitle>
                  <CardSubtitle className="text-muted col-10">{feature.title}</CardSubtitle>
                  <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  
                  target="_blank"
                   onClick={() => handleApprove(feature._id)}  style={
                    buttonStyles[feature._id] || {
                      backgroundColor: "dodgerblue",
                      borderRadius: "5px",
                      color: "white",
                      height: "36px",
                    }
                  }
                >
                   {buttonStyles[feature._id] ? "Approved" : "Approve"} 
                
                  
                </Button>
              </div>
            </Col>
                </div>
              </Col>
            ))}
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default Abouts;
