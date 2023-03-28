import {
    Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";
  
  const Addnewteacher = () => {
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
                  />
                  
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Second name</Label>
                  <Input
                    id="examplePassword"
                    name="number"
                    placeholder="Type your Second name"
                    type="number"
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
                  <Label for="exampleFile">Picture</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">description</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Addnewteacher;
  