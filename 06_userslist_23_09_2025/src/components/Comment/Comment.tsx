import { useContext, type FC, type JSX } from "react";
import type { IComment } from "./CommentList";
import { Link } from "react-router-dom";
import { ThemeContext, type IThemeContext } from "../../utils/themeContext";
import {
  LanguageContext,
  type ILanguageContext,
} from "../../utils/languageContext";


const Comment: FC<{ comment: IComment }> = ({
  comment: { name, email, body, postId, id },
}): JSX.Element => {
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const isDark = theme === "dark";

  const { language } = useContext<ILanguageContext>(LanguageContext);

  return (
    <div className="col-md-6 col-lg-4">
      <div
        className={` card h-100 shadow-sm ${
          isDark ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{body}</p>
          {/* 2. Добавляем возможность для пользователя перейти на соответствующий маршрут (/comments/:commentId) */}
          <Link to={`/comments/${id}`} className="btn btn-primary btn-sm">
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

export default Comment;
