import React, { useState } from 'react';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, such as adding the new book to the JSON file
    console.log('Form submitted:', { title, author, price });
    // Reset form fields
    setTitle('');
    setAuthor('');
    setPrice('');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
          <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
