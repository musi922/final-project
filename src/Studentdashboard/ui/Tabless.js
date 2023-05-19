import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card,Button, CardTitle, CardBody } from "reactstrap";
import ComponentCard from '../../components/ComponentCard';
import { Link } from 'react-router-dom';
import {
 Label,Input,} from "reactstrap";

const Tablesss = () => {
  return (
    <Row>
      
        <ComponentCard
          title="Student Profile Information"
          subtitle={
            <p>
           Send your information to the admin...
            </p>
          }
        >
          
          <Row>
           
          </Row>
        </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Teachers bio
          </CardTitle>
          <CardBody className="">
           
          <Label for="exampleText">Short description</Label>
          <Input id="exampleText" name="text" type="textarea" />
          </CardBody>
        </Card>
      </Col>

      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Teacher tittle
          </CardTitle>
          <CardBody className="">
            <Table>
            <Label for="exampleText">your tittle</Label>
          <Input id="exampleText" name="text" type="textarea" />
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  
                  target="_blank"
                >
                  <Link to={"/Teacherdashboard/Addnewteachers"} style={{color:"white", textDecoration:"none"}}>Send</Link>
                </Button>
              </div>
            </Col>
    </Row>
  );
};

export default Tablesss;
