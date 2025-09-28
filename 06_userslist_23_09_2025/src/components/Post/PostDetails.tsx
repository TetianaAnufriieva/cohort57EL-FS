import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IPost } from "./PostList";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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

  if (!post){
    return <div className="container mt-4">Пост не найден</div>
  }

  return (
    <div className="container mt-4" >
     <h2>Подробный пост</h2>
     <div className="card mt-3 shadow-sm">
        <div className="card-body">
          <p className="card-text"><strong>postId: </strong>{post.userId}</p>
          <p className="card-text"><strong>title: </strong>{post.title}</p>
          <p className="card-text"><strong>body: </strong>{post.body}</p>
          <Link to="/posts" className="btn btn-secondary btn-sm">Вернуться назад к списку постов</Link>      
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
