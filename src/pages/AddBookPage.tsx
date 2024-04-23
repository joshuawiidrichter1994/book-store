import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RootLayout from '../layout';
import { LanguageContext } from '../context/LanguageContext';
import enTranslations from '../../public/translations/en.json';
import frTranslations from '../../public/translations/fr.json'; // Import French translations

interface Book {
  title: string;
  author: string;
  price: number;
}

const AddBookPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { language } = useContext(LanguageContext);

  const translations = language === 'en' ? enTranslations : frTranslations;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!title || !author || !price) {
      setErrorMessage(translations['requiredFieldsError']);
      return;
    }

    // Check if the title already exists
    if (books.some((book) => book.title === title)) {
      setErrorMessage(translations['duplicateBookError']);
      return;
    }

    try {
      await axios.post('/api/add-book', { title, author, price });
      console.log('Book added successfully');

      // Update the books state with the newly added book
      setBooks((prevBooks) => [...prevBooks, { title, author, price }]);

      setTitle('');
      setAuthor('');
      setPrice('');
      setShowModal(true);
    } catch (error) {
      console.error('Error adding book:', error);
      setErrorMessage(translations['addBookError']);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  return (
    <RootLayout>
      <div className="mt-8 mx-8">
        <h2 className="text-xl font-bold mb-4">{translations['newBook']}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-black-700 font-bold mb-2 mt-8">{translations['title']}:</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-black-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-black-700 font-bold mb-2">{translations['author']}:</label>
            <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="border border-black-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-black-700 font-bold mb-2">{translations['price']}:</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value ? parseInt(e.target.value) : '')} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <button type="submit" className="border border-black text-black font-semibold rounded-md px-4 py-2 bg-white hover:bg-gray-200 transition-colors duration-300 mt-8">{translations['addBook']}</button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="modal bg-white rounded-lg shadow-lg p-6 text-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">{translations['bookAddedModalHeader']}</h2>
              <p className="text-gray-600">{translations['bookAddedModalText']}</p>
            </div>
            <button onClick={closeModal} className="border border-black text-black font-semibold rounded-md px-4 py-2 bg-white hover:bg-gray-200 transition-colors duration-300 mt-4">{translations['closeBtn']}</button>
          </div>
        </div>
      )}
    </RootLayout>
  );
};

export default AddBookPage;
