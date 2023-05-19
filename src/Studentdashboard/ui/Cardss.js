import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import Blogs from "../Blogs";
import { useState, useEffect } from "react";
import axios from 'axios';

const BlogData = [
  
  {
    image: bg1,
    title: "Science",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Mathematics",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Science",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Mathematics",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Mathematics",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Mathematics",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Mathematics",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Mathematics",
    subtitle: "Study this unit",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Cardsss = () => {
  const[features ,setfeatures]= useState([]);




  useEffect(() => {
    const config = {
      
    };
    axios
      .get(
        "https://new-generation.onrender.com/activity/getActivity",
        config
      )
      .then((response) => {
        setfeatures(response.data);
        console.log(typeof features);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Student assignments seen</h5>
      <Row>
      {features.map((feature, index,) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blogs
              
              title={feature.title}
              text={feature.description}
              
            />
          </Col>
        ))}
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
    
     
    </div>
  );
};

export default Cardsss;
