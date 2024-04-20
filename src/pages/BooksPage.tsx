import React from 'react';
import RootLayout from '../layout';

interface Book {
  title: string;
  author: string;
  price: number;
}

interface BooksPageProps {
  books: Book[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  return (
    <RootLayout>    
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
  </RootLayout>

  );
};

export async function getServerSideProps() {
  // Fetch data from the API (or read from file)
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(process.cwd(), 'public/data', 'books.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const books: Book[] = JSON.parse(jsonData);

  // Pass data to the page component as props
  return { props: { books } };
}

export default BooksPage;
