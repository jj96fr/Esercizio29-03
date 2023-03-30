import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";

function BookList(props) {
  const { books } = props;

  const [searchQuery, setSearchQuery] = useState("");

  const filterBookList = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => filterBookList(e.target.value)}
      />
      <Row className="d-flex">
        {filteredBooks.map((book) => (
          <Col sm={12} md={6} lg={4} key={book.asin} className="p-3">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BookList;
