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
const About = () => {
  const[features ,setfeatures]= useState([])

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`,
      },
    };
    axios
      .get(
        "https://new-generation.onrender.com/Admin/GetAllTeacher",
        config
      )
      .then((response) => {
        setfeatures(response.data.data);
        console.log(typeof features);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDecline = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`,
      },
    };
    axios
      .delete(
        `https://new-generation.onrender.com/Admin/deleteTeacher/${id}`,
        config
      )
      .then((response) => {
        setfeatures(features.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <ComponentCard
          title="New Generation Teachers"
          subtitle={
            <p>
              5 premium and highly customizable demo variations included in the package, with React
              Router 6, Redux Toolkit, Axios nd much more...
            </p>
          }
        >
          
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  
                  target="_blank"
                >
                  <Link to={"/dashboard/Addnewteacher"} style={{color:"white", textDecoration:"none"}}>Add new</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
        <ComponentCard title="Teachers">
  <Row>
    {features?.map((feature) => (
      <Col lg="4" className="mb-5 pb-3" key={feature._id}>
        <div style={{background:"#fff",borderRadius:"5px",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.2)", 
        }}>
          <div style={{marginLeft:"33%"}}>
          <img
            src={feature.image}
            className="rounded-circle"
            alt="avatar"
            width="100"
            height="100"
            
          />
          </div>
          <div style={{marginLeft:"26%"}}>
          <CardTitle tag="h4" className="my-3">
            {feature.firstName + " " + feature.lastName}
          </CardTitle>
          </div>
          <div style={{marginLeft:"6%"}}>
          <CardSubtitle className="text-muted col-10">{feature.dateOfBirth}</CardSubtitle>
          </div>
          <div style={{marginLeft:"40%",}}>
          <button class="btn btn-danger"
                        onClick={() => handleDecline(feature._id)}>Delete</button>
                        </div>
        </div>
      </Col>
    ))}
  </Row>
</ComponentCard>

      </Col>
    </Row>
  );
};

export default About;













