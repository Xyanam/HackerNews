import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { INews } from "../../redux/slices/newsSlice";
import classes from "./News.module.css";

type TNewsProps = {
  news: INews;
};

const News: React.FC<TNewsProps> = ({ news }) => {
  return (
    <Link to={`/${news.id}`} className={classes.link}>
      <div className={classes.block}>
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>{news.title.toUpperCase()}</h1>
        </div>
        <div className={classes.info}>
          <span>author: {news.by}</span>
          <span className={classes.vertical}>|</span>
          <span>{moment(news.time, "X").fromNow()}</span>
          <span className={classes.vertical}>|</span>
          <span>{news.score} likes</span>
        </div>
      </div>
    </Link>
  );
};

export default News;
