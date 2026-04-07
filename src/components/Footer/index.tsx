import React from "react";
import "./styles.css";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-left">
          <h3>Alex Montage & Service</h3>
          <p>Professional furniture assembly services in Karlsruhe.</p>

          <div className="footer-languages">
            <LanguageSwitcher />
          </div>
        </div>

        
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Phone: +49 157 882 707 24</p>
          <p>Email: info.ag2000@gmail.com</p>
          <p>Address: Karlsruhe, Germany</p>
        </div>

        
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://wa.me/49123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Alex Montage & Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;