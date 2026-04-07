import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
import { LanguageContext } from "../LanguageContext";
import { translations } from "../../Translations";


const Header: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Alex Montage & Service" className="logo" />
        <h1>Alex Montage & Service</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">{t.nav.home}</Link></li>
          <li><Link to="/about">{t.nav.about}</Link></li>
          <li><Link to="/contact">{t.nav.contact}</Link></li>
          <li><Link to="/gallery">{t.nav.gallery}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;