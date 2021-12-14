import React from "react";
import Book from "../components/Book/Book";
import books from "../fakeData/books.json";
import PageLayout from "../components/PageLayout/PageLayout";
import { useSelector } from "react-redux";
const Discover = () => {
  const disc = useSelector((state) => state.book.discover);
  return (
    <PageLayout>
      {disc.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default Discover;
