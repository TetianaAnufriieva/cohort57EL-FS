import type { FC, JSX } from "react";
import type { IPost } from "./PostList";
import { Link } from "react-router-dom";

const Post: FC<{ post: IPost }> = ({
  post: { userId, id, title, body},
}): JSX.Element => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <p className="card-text">{body}</p>
          <Link to={`/posts/${id}`} className="btn btn-primary btn-sm">Подробнее...</Link>
        </div>
      </div>
    </div>
  ); 
};

export default Post;
