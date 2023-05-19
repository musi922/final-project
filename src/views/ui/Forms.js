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
          Authorization:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjZjYTNlMDhmYjBmOTFjN2U2MTE3NiIsImZpcnN0TmFtZSI6IkJpa29yaW1hbmEiLCJsYXN0TmFtZSI6IlNhdXZ1ZXIiLCJlbWFpbCI6IkJpa29yYVNhdXZ1ZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTHRoMzh2SkxveFduVURMYmpISll4ZXEycU5vWkhOTFlGNUtHRXZuR1BoYW1YRzRnM3pEL20iLCJkYXRlT2ZCaXJ0aCI6IjEwLjEwLjEwIiwibGV2ZWwiOiJQcmltYXJ5MSIsInNjaG9vbElkIjoiMjMyNDIiLCJpbWFnZSI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RheGV5bXF2di9pbWFnZS91cGxvYWQvdjE2ODAyNjM3NDEvYzhucGR4ZXZoZ3U3aTRtbGYydTguanBnIiwicm9sZSI6InN0dWRlbnQiLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTMxVDExOjU1OjQyLjk0OFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTMxVDExOjU1OjQyLjk0OFoiLCJfX3YiOjB9LCJpYXQiOjE2ODA0NDA2OTF9.Z6tdKgI4es8rwtIQ45YUH_uPL1RFuFcSG97UHsfhUDM`}
    })
    .then((result) => result.json())
    .then((result) => {
        console.log(result);
        alert("really do you want to post to these video ")
        // navigate("/Dashboard/MyListings")
        localStorage.setItem("token", result.token);
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
