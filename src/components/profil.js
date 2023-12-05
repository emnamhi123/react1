import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const profile = ({ userInfo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userInfo.imageUrl} />
        <Card.Body>
          <Card.Title>{userInfo.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default profile;
