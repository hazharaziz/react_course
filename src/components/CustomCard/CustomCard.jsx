import { Card, Button } from "react-bootstrap";

import "./CustomCard.css";

const CustomCard = (props) => {
  return (
    <Card className="custom-card-container">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <Button variant="primary" onClick={props.onClick}>
          Update
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
