import { Card, CardBody, CardTitle, CardSubtitle, Table, Button,Input, FormGroup,Label,FormText } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

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
  return (
    <div>
      <Card>
        <CardBody>
         
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          Teachers name and email
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Teachers name</th>
                
                

                <th>Teachers email</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  
                  
                </tr>
                
              ))}
              {/* <Button style={{BackgroundColor:"blue"}}>Add yours</Button> */}
            </tbody>
          </Table>
        </CardBody>
        <CardBody>
      

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>


                <th>Teachers photo</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <FormGroup>
                <Label for="exampleFile"> Upload your photo</Label>
                <Input id="exampleFile" name="file" type="file" />
              </FormGroup>
                
              ))}
              {/* <Button style={{BackgroundColor:"blue"}}>Add yours</Button> */}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
