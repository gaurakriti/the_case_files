import React from "react";
import "../App.css"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101517] py-16 flex flex-col items-center space-y-8">
      <div className="flex space-x-4 items-center text-white">
        <h3 className="text-lg font-semibold">FOLLOW</h3>
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300">
          <FaInstagram size={24} />
        </a>
      </div>
      <h1 className="text-white text-5xl lg:text-9xl font-bold text-center">THE CASE FILES</h1>
    </footer>
  );
};

export default Footer;
