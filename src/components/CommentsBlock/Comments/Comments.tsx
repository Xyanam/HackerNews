import React from "react";
import classes from "./Comments.module.css";

import arrowComment from "../../../assets/img/arrowComment.svg";

const Comments = () => {
  return (
    <div className={classes.block}>
      <div className={classes.main}>
        <div className={classes.head}>
          <p className={classes.title}>doener</p>
        </div>
        <div className={classes.body}>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            ab, odio iusto esse porro numquam rem fugiat nesciunt est temporibus
            obcaecati aliquid, ex animi repudiandae inventore? Omnis, aliquam
            ipsum odio esse fugit explicabo, aut dolores cumque ea molestiae,
            officia placeat?
          </p>
        </div>
        <img src={arrowComment} alt="arrow" className={classes.arrow} />
      </div>
      <div className={classes.child}>
        <div className={classes.headChild}>
          <p className={classes.title}>doener</p>
        </div>
        <div className={classes.bodyChild}>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            ab, odio iusto esse porro numquam rem fugiat nesciunt est temporibus
            obcaecati aliquid, ex animi repudiandae inventore? Omnis, aliquam
            ipsum odio esse fugit explicabo, aut dolores cumque ea molestiae,
            officia placeat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
