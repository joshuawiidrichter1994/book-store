import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-4 border-t-2 border-gray-700 mt-16 lg:mt-20"> {/* Increased top margin */}
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <img src="/images/facebook.png" alt="Facebook" className="mr-4" style={{ width: "50px", height: "50px" }} />
        <img src="/images/instagram.png" alt="Instagram" className="mr-4" style={{ width: "50px", height: "50px" }} />
        <img src="/images/youtube.png" alt="YouTube" style={{ width: "50px", height: "50px" }} />
      </div>
    </footer>
  );
};

export default Footer;
