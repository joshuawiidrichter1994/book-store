import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-6 border-t-2 border-gray-700 mt-16 lg:mt-20"> {/* Increased top margin */}
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center space-x-12"> {/* Increased space between icons */}
          <div className="mt-4 mb-4"> {/* Added margin top and bottom */}
            <img src="/images/facebook.png" alt="Facebook" style={{ width: "50px", height: "50px" }} />
          </div>
          <div className="mt-4 mb-4"> {/* Added margin top and bottom */}
            <img src="/images/instagram.png" alt="Instagram" style={{ width: "50px", height: "50px" }} />
          </div>
          <div className="mt-4 mb-4"> {/* Added margin top and bottom */}
            <img src="/images/youtube.png" alt="YouTube" style={{ width: "50px", height: "50px" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
