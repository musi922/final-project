import {
  Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";
  import { useState, useEffect } from "react";
  import axios from "axios";

const Forms = () => {
   const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [status, setstatus] = useState("");
    const [date, setdate] = useState("");


  



    const handleContact = (e) => {
      e.preventDefault();
      const data = {
        title, 
        description,
        date,
        status,
      };
      onSendPost(data);
  };
  function onSendPost(data) {
    // let formData = new FormData();
    // Object.keys(data).forEach(function (key) {
    //   formData.append(key, data[key]);
    // });
  
    axios.post('https://new-generation.onrender.com/activity/createActivity',data).then((result)=>console.log(result)).catch((err)=>console.log(err))}
    
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0" style={{color:"#EA9010"}}>
            <i className="bi bi-bell me-2"> </i>
            Fill out The form For assignments
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Subject</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Type your name"
                  type="text"
                  onChange={(e)=> settitle(e.target.value)}
                />
                
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Category</Label>
                <Input
                  id="status"
                  name="status"
                  placeholder="Type your category"
                  type="text"
                  onChange={(e)=> setstatus(e.target.value)}
                />
                
              </FormGroup>
              
              <FormGroup>
                <Label for="exampleText">QUESTIONS</Label>
                <Input id="exampleText" name="description" type="textarea" onChange={(e)=> setdescription(e.target.value)}/>
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleFile">OR Upload questions</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is Can be microsoft word or Excel sheets or any other,
                </FormText>
              </FormGroup> */}
              <FormGroup>
                <Label for="exampleEmail">Date</Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="Type your name"
                  type="text"
                  onChange={(e)=> setdate(e.target.value)}
                />
                
              </FormGroup>
              <Button  onClick={(e) => handleContact(e)}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
