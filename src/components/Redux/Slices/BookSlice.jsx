import { createSlice } from "@reduxjs/toolkit";
import book from "../../../fakeData/books.json";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    discover: book,
    readingList: [],
    finishedList: [],
  },

  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFromList: (state, { payload }) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload
      );
    },
  },
});

export const { addToReadingList, removeFromList } = bookSlice.actions;

export default bookSlice.reducer;
