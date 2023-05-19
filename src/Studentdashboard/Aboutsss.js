import React from 'react';
import { Row, Col, CardTitle, Button, CardSubtitle } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';
import user3 from "../assets/images/users/user3.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user1 from "../assets/images/users/user1.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
import { Link } from 'react-router-dom';

const Aboutsss = () => {
  const features = [
    {
      title: 'Richard',
      desc: 'Create React App is a tool that gives you a massive head start when building React apps.',
      icon: user2,
    },
    {
      title: ' Richard',
      desc: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components.',
      icon: user4,
    },
    {
      title: ' Richard',
      desc: 'It is isomorphic authorization JavaScript library which restricts what resources a given client is allowed to access.',
      icon: user3,
    },
    {
      title: ' Richard',
      desc: 'This theme comes with built-in light & dark layouts, select as per your preference.',
      icon: user1,
    },
    {
      title: ' Richard',
      desc: 'Built-in customizer enables users to change their admin panel look & feel based on their preferences.',
      icon: user5,
    },
    {
      title: ' Richard',
      desc: 'Creative & smart well crafted apps like email, chat, todo & calender allows you to create your apps faster.',
      icon: user1,
    },
    {
      title: ' Richard',
      desc: 'Beautifully crafted, clean & modern designed admin theme with 5 different demos & light - dark versions.',
      icon: user2,
    },
    {
      title: 'Richard',
      desc: 'Carefully crafted, clean, smart & easy theme navigation with collapsible option.',
      icon: user3,
    },
    {
      title: 'Richard',
      desc: 'jQuery is great JS library, But Its not a great idea to use jQuery and React in the same UI.',
      icon: user4,
    },
    {
      title: 'Richard',
      desc: 'Unlimited color options allows you to set your application color as per your branding.',
      icon: user5,
    },
    {
      title: 'Richard',
      desc: 'To avoid winding up with a large bundle, it’s good to get ahead of the problem and use "Code Splitting".',
      icon: user3,
    },
  ];
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
      
        <ComponentCard title="Student Projects to be Posted">
          <Row>
            {features.map((feature) => (
              <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                <div>
                <img
                        src={feature.icon}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />

                  <CardTitle tag="h4" className="my-3">
                    {feature.title}
                  </CardTitle>
                  <CardSubtitle className="text-muted col-10">{feature.desc}</CardSubtitle>
                  <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  
                  target="_blank"
                >
                  <Link to={""} style={{color:"white", textDecoration:"none"}}>Send</Link>
                </Button>
              </div>
            </Col>
                </div>
              </Col>
            ))}
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default Aboutsss;
