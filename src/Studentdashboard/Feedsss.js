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
    title: " You Submitted assignment",
    icon: "bi bi-bell",
    color: "primary",
    date: "8 minute ago",
  },
  {
    title: "You submitted assignment.",
    icon: "bi bi-person",
    color: "info",
    date: "7 minute ago",
  },
  {
    title: " New assignment was sent.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "You submitted application",
    icon: "bi bi-bag-check",
    color: "success",
    date: "5 minute ago",
  },
  {
    title: "new projects posted",
    icon: "bi bi-bell",
    color: "dark",
    date: "4 minute ago",
  },
  {
    title: "New notifications alerts",
    icon: "bi bi-hdd",
    color: "warning",
    date: "2 minute ago",
  },
];

const Feedsss = () => {
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

export default Feedsss;
