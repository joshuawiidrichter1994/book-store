import React, { useState, useEffect } from 'react';
import RootLayout from '../layout';

const IndexPage: React.FC = () => {
  // Array of book image file names
  const bookImages = [
    'book-1.jpg',
    'book-2.jpg',
    'book-3.jpg',
    'book-4.jpg',
    'book-5.jpg',
    'book-6.jpg',
    'book-7.jpg',
    'book-8.jpg',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  // Function to update the image index every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index, looping back to the start if necessary
      const nextIndex = (imageIndex + 1) % bookImages.length;
      setImageIndex(nextIndex);
    }, 4000); // Change the interval to trigger every 4 seconds
    return () => clearInterval(intervalId);
  }, [imageIndex, bookImages.length]);

  return (
    <RootLayout>
      <div className="relative overflow-hidden bg-white mt-8 flex justify-center items-center">
        <div className="image-container">
          <img
            src={`/images/${bookImages[imageIndex]}`}
            alt={`Book Slide ${imageIndex + 1}`}
            className="image object-cover w-full h-full"
          />
        </div>
      </div>
    </RootLayout>
  );
};

export default IndexPage;
