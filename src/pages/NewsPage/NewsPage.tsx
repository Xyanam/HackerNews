import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import News from "../../components/News/News";
import { fetchNews } from "../../redux/slices/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import classes from "./NewsPage.module.css";

const AllNews: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allNews, loading } = useAppSelector((state) => state.news);

  const sortNewsByTime = [...allNews].sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );

  useEffect(() => {
    dispatch(fetchNews());
    setInterval(() => {
      dispatch(fetchNews());
    }, 60000);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.btnBlock}>
        <button className={classes.btn} onClick={() => dispatch(fetchNews())}>
          REFRESH
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        sortNewsByTime.map((news) => <News key={news.id} news={news} />)
      )}
    </div>
  );
};

export default AllNews;
