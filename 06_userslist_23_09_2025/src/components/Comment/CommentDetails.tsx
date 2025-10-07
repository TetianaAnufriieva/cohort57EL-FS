import { useContext, useEffect, useState, type Context } from "react";
import { Link, useParams } from "react-router-dom";
import type { IComment } from "./CommentList";
import axios from "axios";
import {
  LanguageContext,
  type ILanguageContext,
} from "../../utils/languageContext";

const CommentDetails = () => {
  // 3. (Для динамической маршрутизации)
  // Получаем информацию о параметре, который меняется в зависимости от id комментария
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState<IComment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { language } = useContext<ILanguageContext>(LanguageContext);

  useEffect(() => {
    axios
      .get<IComment>(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setComment(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (!comment) {
    return (
      <div className="container mt-4">
        {language === "ru"
          ? "Комментарий не найден"
          : language === "en"
          ? "Comment not found"
          : "Kommentar nicht gefunden"}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>
        {language === "ru"
          ? "Подробный комментарий"
          : language === "en"
          ? "Detailed comment"
          : "Detaillierter Kommentar"}
      </h2>
      <div className="card mt-3 shadow-sm">
        <div className="card-body">
          <p className="card-text">
            <strong>
              {language === "ru"
                ? "Номер поста: "
                : language === "en"
                ? "Post number: "
                : "Beitragsnummer: "}
            </strong>
            {comment.postId}
          </p>
          <p className="card-text">
            <strong>
              {language === "ru"
                ? "Номер комментария: "
                : language === "en"
                ? "Comment number: "
                : "Kommentarnummer: "}
            </strong>
            {comment.id}
          </p>
          {/* 4. Добавляем возможность для пользователя перейти на соответствующий маршрут (/comments) */}
          <Link to="/comments" className="btn btn-secondary btn-sm">
            {language === "ru"
              ? "Вернуться назад к списку комментариев"
              : language === "en"
              ? "Return to the comments list"
              : "Zurück zur Kommentarliste"}
          </Link>
        </div>
      </div>
      <div>
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div>{error && <>Ошибка при загрузке данных: {error}</>}</div>
    </div>
  );
};

export default CommentDetails;

