import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsBlock from "../../components/CommentsBlock/CommentsBlock";
import CurrentNews from "../../components/CurrentNews/CurrentNews";
import Loader from "../../components/Loader/Loader";
import { fetchNewsById } from "../../redux/slices/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import classes from "./CurrentNewsPage.module.css";

const CurrentNewsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { newsId, news, loading } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchNewsById(+id));
    }
  }, []);

  return (
    <div className={classes.container}>
      {loading ? <Loader /> : <CurrentNews news={news} newsId={newsId} />}
      <button className={classes.btn}>REFRESH COMMENTS</button>
      <CommentsBlock />
    </div>
  );
};

export default CurrentNewsPage;
