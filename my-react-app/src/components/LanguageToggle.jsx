import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-toggle">
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
        title="English"
      >
        🇬🇧 EN
      </button>
      <button
        className={language === "et" ? "active" : ""}
        onClick={() => setLanguage("et")}
        title="Eesti keel"
      >
        🇪🇪 ET
      </button>
    </div>
  );
};

export default LanguageToggle;
