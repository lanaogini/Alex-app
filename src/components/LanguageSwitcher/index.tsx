import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "./styles.css";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <button
        className={language === "ru" ? "active" : ""}
        onClick={() => setLanguage("ru")}
      >
        RU
      </button>
      <button
        className={language === "de" ? "active" : ""}
        onClick={() => setLanguage("de")}
      >
        DE
      </button>
      <button
        className={language === "ro" ? "active" : ""}
        onClick={() => setLanguage("ro")}
      >
        RO
      </button>

      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;