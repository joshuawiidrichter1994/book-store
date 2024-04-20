import React, { useState, useEffect } from 'react';
import RootLayout from '../layout';

const IndexPage: React.FC = () => {
  // Function to generate a random image URL
  const generateRandomImageUrl = () => `https://source.unsplash.com/random/1600x900?sig=${Math.random()}`;

  const [imageUrl, setImageUrl] = useState(generateRandomImageUrl());

  // Function to update the image URL every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageUrl(generateRandomImageUrl());
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <RootLayout>
      <div className="relative overflow-hidden h-screen">
        <img
          src={imageUrl}
          alt="Random Slide"
          className="object-cover w-full h-full"
        />
      </div>
    </RootLayout>
  );
};

export default IndexPage;
