import React from "react";
import Comments from "./Comments/Comments";
import classes from "./CommentsBlock.module.css";

const CommentsBlock = () => {
  return (
    <div className={classes.container}>
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
};

export default CommentsBlock;
