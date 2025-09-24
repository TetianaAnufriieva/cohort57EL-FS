import type { FC, JSX } from "react";
import type { IComment } from "./CommentList";

const Comment: FC<{ comment: IComment }> = ({
  comment: { name, email, body },
}): JSX.Element => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
