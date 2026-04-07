import { createContext } from "react";

type LanguageContextType = {
  language: "ru" | "de" | "ro" | "en"; 
  setLanguage: (lang: "ru" | "de" | "ro" | "en") => void; 
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "ru",
  setLanguage: () => {},
});