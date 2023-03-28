import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: " New video posted",
    icon: "bi bi-bell",
    color: "primary",
    date: "8 minute ago",
  },
  {
    title: "New message from user.",
    icon: "bi bi-person",
    color: "info",
    date: "7 minute ago",
  },
  {
    title: "New student registered.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "New projects posted",
    icon: "bi bi-bag-check",
    color: "success",
    date: "5 minute ago",
  },
  {
    title: "New techer registered",
    icon: "bi bi-bell",
    color: "dark",
    date: "4 minute ago",
  },
  {
    title: "Server development error",
    icon: "bi bi-hdd",
    color: "warning",
    date: "2 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
         Alerts and Notifications
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
