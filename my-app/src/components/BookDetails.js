import React from "react";
import styled from "styled-components";

const BookDetails = ({ book }) => {
  return (
    <BookContainer>
      <Title>{book.title}</Title>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Published:</strong> {book.year}
      </p>
    </BookContainer>
  );
};

const Title = styled.h2`
text-align: center;
`

const BookContainer = styled.div`
  background-color: white;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  `



export default BookDetails;
