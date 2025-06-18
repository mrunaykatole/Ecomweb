// import React from "react";
// import "./Footer.css"
// import Logo from "../assets/Logo.png"
// function Footer(){
//     return(
//         <>
//         <footer>
//             <div className="footer">
//                 <div className="footer-logo">
//                     <img src={Logo} alt="Logo"/>
//                 </div>
//             </div>

//         </footer>
//         </>
//     );
// }
// export default Footer

import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={Logo} alt="Shoppers Stop Logo" className="footer-logo" />

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/Products">Products</a>
          <a href="/Category">Categories</a>
          <a href="/Cart">Cart</a>
        </div>

        <div className="footer-socials">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
        </div>

        <p className="footer-copy">© 2025 Shoppers Stop. Shopping made easy.</p>
      </div>
    </footer>
  );
}

export default Footer;
