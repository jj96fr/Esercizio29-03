import React from "react";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";
import { Card, Row, Col } from "react-bootstrap";

function AllTheBooks() {
  return (
    <>
      <Row>
        {booksFantasy.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {booksHistory.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {booksHorror.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {booksRomance.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {booksScifi.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} className="p-3">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllTheBooks;

