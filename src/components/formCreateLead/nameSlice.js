import { createSlice } from "@reduxjs/toolkit";

const namesSlice = createSlice({
  name: "names",
  initialState: {
    names: [],
  },
  reducers: {
    addName(state, action) {
      state.names.push({
        id: state.names.length + 1,
        name: action.payload.name,
      });
    },

    removeName(state, action) {
      state.names = state.names.filter((name) => name.id !== action.payload.id);
    },
  },
});

export const { addName, removeName } = namesSlice.actions;

export default namesSlice.reducer;
