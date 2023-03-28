import {
  Card, Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";

const Formss = () => {
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
                  type="text"
                />
                
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Student number</Label>
                <Input
                  id="examplePassword"
                  name="number"
                  placeholder="Type only your number"
                  type="number"
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
                <Label for="examplePassword">Project Link</Label>
                <Input
                  id="examplePassword"
                  name="number"
                  placeholder="Paste your Link"
                  type="text"
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
                <Label for="exampleText">description</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option one is this and that—be sure to include why it's
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{" "}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Formss;
