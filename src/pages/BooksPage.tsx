// pages/BooksPage.tsx

import React from 'react';
import booksData from '../../public/data/books.json';

const BooksPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">List of Books</h1>
      <ul>
        {booksData.map((book, index) => (
          <li key={index} className="mb-4">
            <div className="font-bold">{book.title}</div>
            <div>Author: {book.author}</div>
            <div>Price: ${book.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
