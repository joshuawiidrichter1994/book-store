import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-6 border-t-2 border-gray-700  mt-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center space-x-12">
          <div className="mt-4 mb-4">
            <a href="https://www.facebook.com/" target="_blank"><img src="/images/facebook.png" alt="Facebook" style={{ width: "40px", height: "40px" }} /></a>
          </div>
          <div className="mt-4 mb-4">
            <a href="https://www.instagram.com/" target="_blank" ><img src="/images/instagram.png" alt="Instagram" style={{ width: "40px", height: "40px" }} /></a>
          </div>
          <div className="mt-4 mb-4">
            <a href="https://www.youtube.com/" target="_blank" ><img src="/images/youtube.png" alt="YouTube" style={{ width: "40px", height: "40px" }} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
