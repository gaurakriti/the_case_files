// import React from "react"

// const Footer = () => {
//   return (
//     <div class="bg-[#101517] h-[200px] flex items-center my-16"  >
//     <div class="h-[20px] flex space-x-4  ">
//         <h3 class=" ">FOLLOW</h3>
//         <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
//         <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
//         <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
//     </div>
    
// <h1 class="  text-white lg:text-9xl px-3 pb-8 text-5xl xl:mx-auto">THE CASE FILES</h1>
// </div>
    
//   )
// }

// export default Footer

import React from "react";
import "../App.css"; // Assuming you have a CSS file for styles
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer" id="foot">
      <div className="socialMediaSection">
        <h3>FOLLOW</h3>
        <i><FaFacebook/></i>
        <i><FaTwitter/></i>
        <i><FaInstagram/></i>
      </div>

      <h1 className="title">THE CASE FILES</h1>
    </footer>
  );
};

export default Footer;
