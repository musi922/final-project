import {
    Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";
    import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
  
  const Addnewteacher = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [image, setImage] = useState("");
    
        const navigate =useNavigate()


    const handleAddTeacher = (e) => {
        e.preventDefault();
        const data = {
            firstName, 
            lastName,
            email,
            password,
            dateOfBirth,
            image,
        };
        onSendPost(data);
    };
    function onSendPost(data) {
      let formData = new FormData();
      Object.keys(data).forEach(function (key) {
        formData.append(key, data[key]);
      });
    
      fetch("https://new-generation.onrender.com/admin/registerTeacher", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`
        },
      })
        .then((result) => result.json())
        .then((result) => {
          console.log(result);
          alert("really do you want to register these teacher ");
          
          // Save the token to local storage
          localStorage.setItem("token", result.token);
          
          // Navigate to the desired page
          navigate("/dashboard/about",)
        });
    }
    
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Fill out The form for teacher Details
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">First name</Label>
                  <Input
                    id="exampleEmail"
                    name="name"
                    placeholder="Type your First name"
                    type="text"
                    onChange={(e)=> setFirstName(e.target.value)}
                  />
                  
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Last name</Label>
                  <Input
                    id="exampleEmail"
                    name="name"
                    placeholder="Type your First name"
                    type="text"
                    onChange={(e)=> setLastName(e.target.value)}
                  />
                  
                </FormGroup>
                {/* <FormGroup>
                  <Label for="examplePassword">Last name</Label>
                  <Input
                    id="examplePassword"
                    name="number"
                    placeholder="Type your Second name"
                    type="number"
                    onChange={(e)=> setLastName(e.target.value)}
                  />
                </FormGroup> */}
                
             
                
                {/* <FormGroup>
                  <Label for="exampleSelectMulti">Select Multiple</Label>
                  <Input
                    id="exampleSelectMulti"
                    multiple
                    name="selectMulti"
                    type="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup> */}
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="name"
                    placeholder="Type your Email"
                    type="email"
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                  
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="number"
                    placeholder="Type your password"
                    type="passwrd"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="exampleFile">Picture</Label>
                  <Input id="exampleFile" name="file" type="file" onChange={(e)=> setImage(e.target.files[0])}/>
                  
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">description</Label>
                  <Input id="exampleText" name="text" type="textarea" onChange={(e)=> setDateOfBirth(e.target.value)}/>
                </FormGroup>
                <Button onClick={(e) => handleAddTeacher(e)} style={{cursor:"pointer"}}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Addnewteacher;
  