import { Col, Row } from "reactstrap";
import ProjectsChart from "../components/dashboard/SalesChart";
import Feedss from "../Teacherdashboard/Feedss.js";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";


const BlogData = [
  {
    image: bg1,
    title: "Mathematics",
    subtitle: "Calculate and solve",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Science",
    subtitle: "Evaluate the following",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "English",
    subtitle: "Study about this",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "social studies",
    subtitle: "Work on this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Start = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
       
          <h1 style={{color:"#2C2B35"}}>Welcome back student, </h1>
       
       
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <ProjectsChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feedss />
        </Col>
      </Row>
      {/***Table ***/}
      {/* <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row> */}
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
           
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Start;
