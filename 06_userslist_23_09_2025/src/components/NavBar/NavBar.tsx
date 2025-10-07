import { useContext, type JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext, type IThemeContext } from "../../utils/themeContext";
import {
  LanguageContext,
  type ILanguageContext,
} from "../../utils/languageContext";

export default function NavBar(): JSX.Element {
  const { theme, setTheme } = useContext<IThemeContext>(ThemeContext);
  const {  language, setLanguage } = useContext<ILanguageContext>(LanguageContext); //Передача контекста смены языка работы нашего приложения

  const isDark = theme === "dark";
  const newTheme = isDark ? "light" : "dark";

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listElement}>
          <NavLink to="/home" className={style.link}>
            {" "}
            {language === "ru"
              ? "Домашняя страница"
              : language === "en"
              ? "Home Page"
              : "Hauptseite"}
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="/users" className={style.link}>
            {" "}
            {language === "ru"
              ? "Пользователи"
              : language === "en"
              ? "Users"
              : "Benutzer"}
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="/comments" className={style.link}>
            {language === "ru"
              ? "Комментарии"
              : language === "en"
              ? "Comments"
              : "Kommentare"}
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="/posts" className={style.link}>
           {language === "ru"
              ? "Посты"
              : language === "en"
              ? "Posts"
              : "Beiträge"}
          </NavLink>
        </li>
        <li className={style.listElement}>
          <button
            className="nav-link btn btn-info"
            onClick={() => setTheme(newTheme)}
          >
            {language === "ru"
              ? "Сменить тему на: "
              : language === "en"
              ? "Change theme on: "
              : "Theme wechseln: "}{" "}
            {newTheme}
          </button>
        </li>
        <li className={style.listElement}>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {language === "ru"
                ? "Сменить язык"
                : language === "en"
                ? "Change language"
                : "Sprache ändern"}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("ru")}
                >
                  {language === "ru"
                    ? "Русский"
                    : language === "en"
                    ? "Russian"
                    : "Russisch"}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("en")}
                >
                  {language === "ru"
                    ? "Английский"
                    : language === "en"
                    ? "English"
                    : "Englisch"}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setLanguage("de")}
                >
                  {language === "ru"
                    ? "Немецкий"
                    : language === "en"
                    ? "German"
                    : "Deutsch"}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
