import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-sm">
            <span className="brand-light">Powered by</span>{" "}
            <span className="brand-dark">Your Brand</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
