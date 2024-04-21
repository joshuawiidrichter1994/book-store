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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4">
              <div className="font-bold">{book.title}</div>
              <div>Author: {book.author}</div>
              <div>Price: ${book.price}</div>
            </div>
          ))}
        </div>
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
  let books: Book[] = JSON.parse(jsonData);

  // Reverse the array of books to display the newly added book first
  books = books.reverse();

  // Pass data to the page component as props
  return { props: { books } };
}

export default BooksPage;
