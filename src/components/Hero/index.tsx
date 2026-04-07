import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { translations } from "../../Translations";
import "./styles.css"; // можно отдельный CSS для Hero

const Hero: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations["ru"];

  return (
    <section className="hero">
      <h1 className="hero-title">{t.heroTitle}</h1>
      <p className="hero-subtitle">{t.heroSubtitle}</p>
      {/* Кнопка убрана */}
    </section>
  );
};

export default Hero;