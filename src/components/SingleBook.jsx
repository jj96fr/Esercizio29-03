import React, { Component } from "react";
import {  Card, Col, Row } from "react-bootstrap";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
        <Row>
        <Col sm={12} md={6} lg={4} className="p-3">
          <Card
            style={{ width: "18rem" }}
            onClick={this.handleClick}
            className={selected ? "border-danger" : ""}
          >
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SingleBook;


    