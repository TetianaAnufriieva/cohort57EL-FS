import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./utils/themeContext.ts";
import { LanguageContext } from "./utils/languageContext.ts";

export const Root = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"ru" | "en" | "de">("ru");

  return (
    <StrictMode>
      {/* 0 - Подключение маршрутизации */}
      <BrowserRouter>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          {/* 2. Передача контекста */}
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <App />
          </ThemeContext.Provider>{" "}
        </LanguageContext.Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
