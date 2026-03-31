import { createContext, useState, useEffect } from "react";
import { en } from "../translations/en";
import { et } from "../translations/et";

const translations = { en, et };

// Create context for language management
const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Load saved language preference or default to English
    return localStorage.getItem("appLanguage") || "en";
  });

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language], // Current translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
