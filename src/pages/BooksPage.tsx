import React, { useContext } from 'react';
import RootLayout from '../layout';
import { LanguageContext} from '../context/LanguageContext';
import { convertPriceToCurrency } from '../providers/LanguageProvider';
import enTranslations from '../../public/translations/en.json'; // Import English translations
import frTranslations from '../../public/translations/fr.json'; // Import French translations

interface Book {
  title: string;
  author: string;
  price: number;
}

interface BooksPageProps {
  books: Book[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  const { language, currency } = useContext(LanguageContext);

  // Load translations based on language
  const translations = language === 'en' ? enTranslations : frTranslations;

  return (
    <RootLayout>    
      <div className="min-h-screen flex flex-col"> {/* Add min-h-screen and flex classes */}
        <div className="container mx-auto mt-8 flex-grow"> {/* Add flex-grow class */}
          <h1 className="text-2xl font-bold mb-4">{translations['listOfBooks']}</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {books.map((book, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4">
                <div className="font-bold">{book.title}</div>
                <div>{book.author}</div>
                <div> {translations['currency']} {convertPriceToCurrency(book.price, currency)}</div>
              </div>
            ))}
          </div>
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
