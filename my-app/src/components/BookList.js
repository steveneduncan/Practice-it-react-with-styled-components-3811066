import React from "react";
import books from "./challanges/bookData";
import BookDetails from "./BookDetails";

import styled from "styled-components";

const BookList = () => {
  return (
    <Wrapper>
      <Title>Book List</Title>
      <Grid>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightgray;
  height: 100vh;
  overflow: scroll;
`;

const Title = styled.h2`
  margin: 0;
  color: darkgreen;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-contents: start;
  gap: 5%;
`;

export default BookList;
