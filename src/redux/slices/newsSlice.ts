import { getNewsById, getNewsId } from "../../functions/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INews } from "../../types/INews";
import { INewsState } from "../../types/INewsState";

const initialState: INewsState = {
  newsId: [],
  allNews: [],
  news: {} as INews,
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk<INews[], undefined>(
  "news/fetchNews",
  async function (_: undefined, { rejectWithValue }) {
    try {
      const newsId = await getNewsId().then((response: number[]) =>
        response.slice(0, 100)
      );
      const news = await Promise.all(
        newsId.map(async (id) => {
          const response = await getNewsById(id);
          return response;
        })
      );
      let filteredNews = news.filter((news) => news !== null);
      return filteredNews;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

export const fetchNewsById = createAsyncThunk<INews, number>(
  "news/fetchNewsById",
  async function (id: number, { rejectWithValue }) {
    try {
      const response = await getNewsById(id);
      return response;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.allNews = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.loading = false;
      state.error = "Server error!";
    });
    builder.addCase(fetchNewsById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNewsById.fulfilled, (state, action) => {
      state.loading = false;
      state.newsId.push(action.payload.id);
      state.news = action.payload;
    });
    builder.addCase(fetchNewsById.rejected, (state) => {
      state.loading = false;
      state.error = "Server error!";
    });
  },
});

export default newsSlice.reducer;
