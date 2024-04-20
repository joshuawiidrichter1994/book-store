import React, { useState, useEffect } from 'react';

const BooksPage = () => {
    const [books, setBooks] = useState<{ title: string; author: string; price: number; }[]>([]);


  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    // Here you would fetch data from the JSON file
    // For demonstration purposes, using a dummy data
    const dummyData = [
      { title: 'Book 1', author: 'Author 1', price: 10.99 },
      { title: 'Book 2', author: 'Author 2', price: 9.99 },
      { title: 'Book 3', author: 'Author 3', price: 12.50 },
    ];
    setBooks(dummyData);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">List of Books</h1>
      <ul>
        {books.map((book, index) => (
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
