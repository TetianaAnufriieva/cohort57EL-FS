import { useContext, type JSX } from "react";
import { LanguageContext, type ILanguageContext } from "../../utils/languageContext";

export default function Home(): JSX.Element {
    const { language } = useContext<ILanguageContext>(LanguageContext);
  return (
    <div className="container mt-4">
      <h1>{language === "ru"
              ? "Добро пожаловать на наш сайт!"
              : language === "en"
              ? "Welcome to our website!"
              : "Willkommen auf unserer Website!"}</h1>
      <br />
      <p>{language === "ru"
              ? "Здесь вы можете познакомиться с нашими проектами."
              : language === "en"
              ? "Here you can get acquainted with our projects."
              : "Hier können Sie unsere Projekte kennenlernen."}</p>
    </div>
  );
}
