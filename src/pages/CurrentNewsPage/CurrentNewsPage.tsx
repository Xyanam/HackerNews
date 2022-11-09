import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsBlock from "../../components/CommentsBlock/CommentsBlock";
import CommentsLoader from "../../components/CommentsLoader/CommentsLoader";
import CurrentNews from "../../components/CurrentNews/CurrentNews";
import Loader from "../../components/Loader/Loader";
import { getComments } from "../../redux/slices/commentsSlice";
import { fetchNewsById } from "../../redux/slices/newsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import classes from "./CurrentNewsPage.module.css";

const CurrentNewsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { newsId, news, loading } = useAppSelector((state) => state.news);
  const { comments, loadingCom } = useAppSelector((state) => state.comments);

  useEffect(() => {
    if (id !== undefined) {
      const idSearch = newsId.find((comment) => comment === +id);
      if (!idSearch) {
        dispatch(fetchNewsById(+id));
        dispatch(getComments(+id));
      }
    }
  }, []);

  return (
    <div className={classes.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentNews news={news} />
          {comments.length <= 0 ? (
            ""
          ) : loadingCom ? (
            <CommentsLoader />
          ) : (
            <>
              <button
                className={classes.btn}
                onClick={() => {
                  if (id !== undefined) {
                    dispatch(getComments(+id));
                  }
                }}
              >
                REFRESH COMMENTS
              </button>
              <CommentsBlock comments={comments} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CurrentNewsPage;
