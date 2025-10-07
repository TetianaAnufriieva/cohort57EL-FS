import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IPost } from "./PostList";
import axios from "axios";
import {
  type ILanguageContext,
  LanguageContext,
} from "../../utils/languageContext";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { language } = useContext<ILanguageContext>(LanguageContext);

  useEffect(() => {
    axios
      .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (!post) {
    return (
      <div className="container mt-4">
        {language === "ru"
          ? "Пост не найден"
          : language === "en"
          ? "Post not found"
          : "Beitrag nicht gefunden"}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>
        {language === "ru"
          ? "Подробный пост"
          : language === "en"
          ? "Detailed pos"
          : "Detaillierter Beitrag"}
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
            {post.userId}
          </p>
          <p className="card-text">
            <strong>
              {language === "ru"
                ? "Название поста: "
                : language === "en"
                ? "Post title: "
                : "Beitragstitel: "}
            </strong>
            {post.title}
          </p>
          <p className="card-text">
            <strong>
              {language === "ru"
                ? "Содержание поста: "
                : language === "en"
                ? "Post content: "
                : "Beitragstext: "}
            </strong>
            {post.body}
          </p>
          <Link to="/posts" className="btn btn-secondary btn-sm">
            {language === "ru"
              ? "Вернуться назад к списку постов"
              : language === "en"
              ? "Return to the posts list"
              : "Zurück zur Beitragsliste"}
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

export default PostDetails;
