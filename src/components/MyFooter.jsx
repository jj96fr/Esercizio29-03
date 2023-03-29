import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <footer className="bg-light fixed-bottom">
      <Container fluid>
        <Row>
          <Col className="text-center">
            &copy; {new Date().getFullYear()} My Bookstore. Tutti i diritti riservati.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
