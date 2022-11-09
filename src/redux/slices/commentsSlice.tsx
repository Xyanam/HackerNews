import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewsById } from "../../functions/getApi";
import { INews } from "./newsSlice";

interface ICommentsState {
  comments: INews[];
  loadingCom: boolean;
  error: string | null;
}

const initialState: ICommentsState = {
  comments: [],
  loadingCom: false,
  error: null,
};

export const getComments = createAsyncThunk(
  "comments/getComments",
  async function (id: number, { rejectWithValue }) {
    try {
      const response = await getNewsById(id);

      const comments = await Promise.all(
        response.hasOwnProperty("kids")
          ? response?.kids.map(async (kid: number) => {
              const response = await getNewsById(kid);
              return response;
            })
          : ""
      );
      return comments;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getComments.pending, (state) => {
        state.loadingCom = true;
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loadingCom = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.loadingCom = false;
        state.error = "Server error!";
      });
  },
});

export default commentsSlice.reducer;
