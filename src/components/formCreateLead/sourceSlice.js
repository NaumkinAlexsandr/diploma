import { createSlice } from "@reduxjs/toolkit";

const sourceSlice = createSlice({
  name: "sources",
  initialState: {
    sources: [],
  },
  reducers: {
    addSource(state, action) {
      state.sources.push({
        id: state.sources.length + 1,
        source: action.payload.source,
      });
    },
    removeSource(state, action) {
      state.sources = state.sources.filter(
        (source) => source.id !== action.payload.id
      );
    },
  },
});

export const { addSource, removeSource } = sourceSlice.actions;

export default sourceSlice.reducer;
