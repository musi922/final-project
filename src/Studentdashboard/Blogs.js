import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blogs = (props) => {
  return (
    <Card>
      
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Button color={props.color}>solve</Button>
      </CardBody>
    </Card>
  );
};

export default Blogs;
