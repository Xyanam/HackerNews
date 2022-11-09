import React from "react";
import { INews } from "../../redux/slices/newsSlice";
import Comments from "./Comments/Comments";
import classes from "./CommentsBlock.module.css";

type CommentsBlockProps = {
  comments: INews[];
};

const CommentsBlock: React.FC<CommentsBlockProps> = ({ comments }) => {
  let filterComments = comments.filter((com) => !com.deleted);

  return (
    <div className={classes.container}>
      {filterComments.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsBlock;
