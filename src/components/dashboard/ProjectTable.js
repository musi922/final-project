import { Card, CardBody, CardTitle, CardSubtitle, Table, Button,Input, FormGroup,Label,FormText } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
  

const tableData = [
  
  {
   
    name:<input placeholder="type your name"></input>,
    
    project: <input placeholder="type your email"></input>,
    status: "holt",
    weeks: "02-march-2023",
    budget: "Delete",
  },
 
];



const ProjectTables = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState("");
  const [schoolId, setSchoolId] = useState("");
  
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
          level,
          schoolId,
      };
      onSendPost(data);
  };
  function onSendPost(data) {
    let formData = new FormData();
    Object.keys(data).forEach(function (key) {
      formData.append(key, data[key]);
    });
  
    fetch("https://new-generation.onrender.com/admin/registerStudent", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`
      },
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        alert("really do you want to register these student ");
        
        // Save the token to local storage
        localStorage.setItem("token", result.token);
        
        // Navigate to the desired page
      });
  }
  
  return (
    <div>
      <Card>
        <CardBody>
         
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          Student Information
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
            <Label for="exampleEmail">first name</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setFirstName(e.target.value)}
                  type="text"
                />
            <Label for="exampleEmail">Last name</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setLastName(e.target.value)}
                  type="text"
                />
            <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                />
            <Label for="exampleEmail">Password</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                 
                  type="text"
                />
            <Label for="exampleEmail">Level</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setLevel(e.target.value)}
                  type="text"
                />
            <Label for="exampleEmail">School Id</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setSchoolId(e.target.value)}
                  type="text"
                />
            <Label for="exampleEmail">Date of birth</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setDateOfBirth(e.target.value)}
                  type="text"
                />
                 <tr>
                <th>Students photo</th>
              </tr>
            </thead>
            <FormGroup>
                <Label for="exampleFile"> Upload your photo</Label>
                <Input id="exampleFile" name="file" type="file" onChange={(e)=> setImage(e.target.files[0])}/>
              </FormGroup>
              <Button style={{cursor:"pointer"}} onClick={(e) => handleAddTeacher(e)} >Submit</Button>
          </Table>
        </CardBody>
        <CardBody>
      

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
