import React, { useState } from "react";
import classes from "./Comments.module.css";
import arrowComment from "../../../assets/img/arrowComment.svg";
import { INews } from "../../../redux/slices/newsSlice";
import parse from "html-react-parser";
import { getNewsById } from "../../../functions/getApi";

type CommentsProps = {
  comment: INews;
};

const Comments: React.FC<CommentsProps> = ({ comment }) => {
  const [kids, setKids] = useState<INews[]>();
  const [isVisible, setIsVisible] = useState(false);

  const getKids = async () => {
    if (comment.hasOwnProperty("kids")) {
      const response = await Promise.all(
        comment.kids.map(async (kid) => {
          const resp = await getNewsById(kid);
          return resp;
        })
      );
      setKids([...response]);
    }
  };

  return (
    <div className={classes.block}>
      <div className={classes.main}>
        <div className={classes.head}>
          <p className={classes.title}>{comment.by}</p>
        </div>
        <div className={classes.body}>
          <p className={classes.text}>
            {comment.text !== undefined ? parse(comment.text) : ""}
          </p>
        </div>
        {comment.hasOwnProperty("kids") && (
          <img
            src={arrowComment}
            alt="arrow"
            className={isVisible ? classes.arrow : classes.arrowActive}
            onClick={() => {
              getKids();
              setIsVisible(!isVisible);
            }}
          />
        )}
      </div>
      {isVisible
        ? kids?.length &&
          kids.map((kid) => {
            return (
              <div className={classes.child} key={kid.id}>
                <div className={classes.headChild}>
                  <p className={classes.title}>{kid.by}</p>
                </div>
                <div className={classes.bodyChild}>
                  <p className={classes.text}>
                    {kid.text !== undefined ? parse(kid.text) : ""}
                  </p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Comments;
