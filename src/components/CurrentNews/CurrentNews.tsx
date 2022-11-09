import React from "react";
import moment from "moment";
import classes from "./CurrentNews.module.css";
import { INews } from "../../redux/slices/newsSlice";
import ArrowBack from "../ArrowBack/ArrowBack";

type TCurrentNewsProps = {
  news: INews;
};

const CurrentNews: React.FC<TCurrentNewsProps> = ({ news }) => {
  return (
    <div className={classes.block}>
      <ArrowBack />
      <div className={classes.title}>
        <h1>{news.title?.toUpperCase()}</h1>
      </div>
      <div className={classes.btn}>
        <a href={news.url} target="_blank">
          LINK TO THE NEWS
        </a>
      </div>
      <div className={classes.info}>
        <span className={classes.infoItem}>author: {news.by}</span>
        <span className={classes.infoItem}>{news.descendants} comments</span>
        <span className={classes.infoItem}>
          {moment(news.time, "X").format("LLL")}
        </span>
      </div>
    </div>
  );
};

export default CurrentNews;
