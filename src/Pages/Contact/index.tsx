import React, { useContext } from "react";
import { translations } from "../../Translations";
import "./styles.css";
import { LanguageContext } from "../../components/LanguageContext";
import ContactForm from "../../components/ContactForm/contactForm";

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="contact-page">
      <h1>{t.contactTitle}</h1>
      <p>{t.contactText}</p>
      <ContactForm /> 
     
    </div>
  );
};

export default Contact;
