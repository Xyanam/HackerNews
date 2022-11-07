import { getNewsById, getNewsId } from "./../../functions/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INews {
  title: string;
  id: number;
  time: string;
  by: string;
  rating: number;
  descendants: number;
  kids: number[];
  score: number;
  type: string;
  url: string;
  text: string;
  parent: number;
}

interface INewsState {
  newsId: number[];
  allNews: INews[];
  news: INews;
  loading: boolean;
  error: string | null;
}

const initialState: INewsState = {
  newsId: [],
  allNews: [],
  news: {} as INews,
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk(
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
      return news;
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
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.allNews = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = "Server error!";
      });
  },
});

export default newsSlice.reducer;
