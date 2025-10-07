import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Comment from "./Comment";
import {
  type ILanguageContext,
  LanguageContext,
} from "../../utils/languageContext";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentList = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { language } = useContext<ILanguageContext>(LanguageContext);
  useEffect(() => {
    axios
      .get<IComment[]>("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.data)
      .then((data) => {
        setComments(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        // setLoading(false);
      })
      .finally(() => setLoading(false)); // общие конечные действия
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        {language === "ru"
          ? "Комментарии пользователей"
          : language === "en"
          ? "User comments"
          : "Benutzerkommentare"}
      </h2>
      <div className="row g-3">
        {comments
          .filter((_, i) => i < 50)
          .map((e, i) => (
            <Comment key={e.id} comment={e} />
          ))}
        {/* {comments.slice(0, 20).map((comment) => ( 
          <Comment key={comment.id} comment={comment} />
        ))} */}
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

export default CommentList;
