import React, { useContext } from "react";
import "./styles.css";
import { LanguageContext } from "../../components/LanguageContext";
import { translations } from "../../Translations";

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="about-page">
      <h1>{t.aboutTitle}</h1>

      
      <section className="about-history">
        <h2>{t.aboutHistoryTitle}</h2>
        <p>{t.aboutHistoryText}</p>
      </section>

      
      <section className="about-experience">
        <h2>{t.aboutExperienceTitle}</h2>
        <ul>
          {t.aboutExperienceList.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      
      <section className="about-values">
        <h2>{t.aboutValuesTitle}</h2>
        <p>{t.aboutValuesText}</p>
      </section>

      
      <section className="about-cta">
        <p>{t.aboutCtaText}</p>
        <button className="cta-button">{t.aboutCtaButton}</button>
      </section>
    </div>
  );
};

export default About;
