import React, { useState, useEffect, type ReactNode } from "react";
import { LanguageContext } from "./index";

interface ProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<ProviderProps> = ({ children }) => {
  
  const [language, setLanguageState] = useState<"ru" | "de" | "ro" | "en">("ru");

  
  useEffect(() => {
    const saved = localStorage.getItem("lang") as "ru" | "de" | "ro" | "en";
    if (saved) setLanguageState(saved);
  }, []);

  
  const setLanguage = (lang: "ru" | "de" | "ro" | "en") => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};