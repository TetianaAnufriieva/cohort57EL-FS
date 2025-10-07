import { useContext, type FC, type JSX } from "react";
import { v4 } from "uuid";
import type { IUser } from "./UserList";
import { Link } from "react-router-dom";
import {
  LanguageContext,
  type ILanguageContext,
} from "../../utils/languageContext";
import { ThemeContext, type IThemeContext } from "../../utils/themeContext";

const User: FC<{ user: IUser }> = ({
  user: { name, username, email, id },
}): JSX.Element => {
  // 3. Получение значение из контекста
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const { language } = useContext<ILanguageContext>(LanguageContext);
  const isDark = theme === "dark";

  // console.log("Значение переменной isDark равно " + isDark);
  // console.log('Сэр Уинстон Черчилль сказал: "Я хочу обратиться..."');

  return (
    <div className={`col-12 col-md-6 col-lg-4`} key={v4()}>
      <div
        className={`card h-100 shadow-sm ${
          isDark ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2">@{username}</h6>
          <p className="card-text">
            <strong>{language === "ru" ? "Емейл: " : "Email: "} </strong> {email}
          </p>
          {/* 1. Добавление возможности перехода на новую ссылку при нажатии на кнопку */}
          <Link to={`/users/${id}`} className="btn btn-primary btn-sm">
            {language === "ru"
              ? "Подробнее..."
              : language === "en"
              ? "More details"
              : "Mehr Details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
