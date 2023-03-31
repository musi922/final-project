import {
  Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";

const Formsss = () => {
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
                  id="exampleEmail"
                  name="name"
                  placeholder="Type your name"
                  type="text"
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
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">QUESTIONS</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">OR Upload questions</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is Can be microsoft word or Excel sheets or any other,
                </FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Formsss;
