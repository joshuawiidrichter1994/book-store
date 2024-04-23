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

  // Determine if it's a mobile device based on window width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Set initial state
    handleResize();

    // Add event listener to update isMobile state on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to update the image index every 4 seconds
  const [imageIndex, setImageIndex] = useState(0);

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
          {/* Display first two book images stacked for screens 767px and below */}
          {isMobile && (
            <>


              <img
                src={`/images/${bookImages[3]}`}
                alt="Book 1"
                className="image object-cover w-full h-full"
              />
              <div className="mt-8">              
                <span className="slogan-text text-center block mb-4 text-2xl font-light">Urban Eagle Books</span>
                <span className="text-center block mb-8 text-lg font-light">Where Every Page Holds a New Adventure...</span>
              </div>
              <img
                src={`/images/${bookImages[4]}`}
                alt="Book 2"
                className="image object-cover w-full h-full mt-4"
              />

            </>
          )}
          {/* Display single book image for desktop and screens above 767px */}
          {!isMobile && (
            <img
              src={`/images/${bookImages[imageIndex]}`}
              alt={`Book Slide ${imageIndex + 1}`}
              className="image object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default IndexPage;
