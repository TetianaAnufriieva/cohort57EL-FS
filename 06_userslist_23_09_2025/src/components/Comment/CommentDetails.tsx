import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IComment } from "./CommentList";
import axios from "axios";

const CommentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState<IComment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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

  if (!comment){
    return <div className="container mt-4">Комментарий не найден</div>
  }

  return (
    <div className="container mt-4" >
     <h2>Подробный комментарий</h2>
     <div className="card mt-3 shadow-sm">
        <div className="card-body">
          <p className="card-text"><strong>postId:</strong>{comment.postId}</p>
          <p className="card-text"><strong>id:</strong>{comment.id}</p>
          <Link to="/comments" className="btn btn-secondary btn-sm">Вернуться назад к списку комментариев</Link>      
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
