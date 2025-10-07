import { useContext, type FC, type JSX } from "react";
import type { IPost } from "./PostList";
import { Link } from "react-router-dom";
import {
  type ILanguageContext,
  LanguageContext,
} from "../../utils/languageContext";

const Post: FC<{ post: IPost }> = ({
  post: { userId, id, title, body },
}): JSX.Element => {
  const { language } = useContext<ILanguageContext>(LanguageContext);
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <p className="card-text">{body}</p>
          <Link to={`/posts/${id}`} className="btn btn-primary btn-sm">
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

export default Post;
