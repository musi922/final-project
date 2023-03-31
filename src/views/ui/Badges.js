import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardSubtitle } from "reactstrap";
import { useState, useEffect } from "react";
import axios from 'axios';

const Badges = () => {
  const[features ,setfeatures]= useState([])

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`,
      },
    };
    axios
      .get(
        "https://new-generation.onrender.com/Contacts/All",
        config
      )
      .then((response) => {
        setfeatures(response.data.contact);
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
        `https://new-generation.onrender.com/Contact/delete/${id}`,
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
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges
            </CardTitle>
            <CardBody className="">
              <div>
              <Row>
            {features.map((feature) => (
              <Col lg="4" className="mb-5 pb-3" key={feature._id}>
                <div style={{background:"#fff",borderRadius:"5px",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.2)", 
                }}>
                  <div style={{marginLeft:"26%"}}>
                  <CardTitle tag="h4" className="my-3">
                  {feature. Firstname + " " + feature. Lastname}
                  </CardTitle>
                  <div style={{marginLeft:"6%"}}>
                  <CardSubtitle className="text-muted col-10">{feature.Email}</CardSubtitle>
                  </div>
                  <CardTitle tag="h4" className="my-3" style={{color:"#787171", fontSize:"18px", marginLeft:"-12%"}}>
                  {feature. Message}
                  </CardTitle>
                  </div>
                  
                  <div style={{marginLeft:"40%",}}>
                  <button class="btn btn-danger" style={{backgroundColor:'#13cf71', border:"1px solid transparent"}}
                                onClick={() => handleDecline(feature._id)}>Delete</button>
                                </div>
        </div>
      </Col>
    ))}
  </Row>
                 
              </div>
            </CardBody>
          </Card>
        </Col>
        </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Badges;
