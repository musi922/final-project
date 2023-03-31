import {
  Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";
  import { useState, useEffect } from "react";
const Formss = () => {
  const [title, setTittle] = useState("");
    const [Video, setVideo] = useState("");
    const [studentName, setStudentName] = useState("");
    const [schoolId, setSchoolId] = useState("");
    const [Level, setLevel] = useState("");
    const [approved, setapproved] = useState("");

  const handleAddBlog = (e) => {
    e.preventDefault();
    const data = {
      title,
      studentName,
      schoolId,
      Level,
      approved,
      Video,
     
    };
    onSendPost(data);
};

function onSendPost(data) {
    let formData = new FormData();
    Object.keys(data).forEach(function (key) {
        formData.append(key, data[key]);
    });

    fetch("https://new-generation.onrender.com/Project/CreateProject", {
        method: "POST",
        body: formData,
        headers: {
          Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`}
    })
    .then((result) => result.json())
    .then((result) => {
        console.log(result);
        alert("really do you want to post to these video ")
        // navigate("/Dashboard/MyListings")
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
            Fill out The form
          </CardTitle>
          <CardBody>
            <Form>
             
           
              <FormGroup>
                <Label for="exampleEmail">Student name</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  onChange={(e)=> setStudentName(e.target.value)}
                  type="text"
                />
                
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Student numberor Id</Label>
                <Input
                  id="examplePassword"
                  name="number"
                  placeholder="Type only your number"
                  type="number"
                  onChange={(e)=> setSchoolId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select Class</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Nursery</option>
                  <option>primary 1</option>
                  <option>primary 2</option>
                  <option>primary 3</option>
                  <option>primary 4</option>
                  <option>primary 5</option>
                  <option>primary 6</option>
                  onChange={(e)=> setLevel(e.target.value)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select Approval</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>false</option>
                  <option>true</option>
                  onChange={(e)=> setapproved(e.target.value)}
                  
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Project Link</Label>
                <Input
                  id="examplePassword"
                  name="number"
                  placeholder="Paste your Link"
                  type="text"
                  onChange={(e)=> setVideo(e.target.value)}
                />
              </FormGroup>
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
                <Label for="exampleText">Project title</Label>
                <Input id="exampleText" name="text" type="text"  onChange={(e)=> setTittle(e.target.value)}/>
              </FormGroup>
             
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup>
              <Button onClick={(e) => handleAddBlog(e)}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Formss;
