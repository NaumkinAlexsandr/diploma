import { createSlice } from "@reduxjs/toolkit";

const scriptSlice = createSlice({
  name: "scripts",
  initialState: {
    scripts: [],
  },
  reducers: {
    addScripts(state, action) {
      state.scripts.push({
        id: new Date().toISOString(+1),
        names: action.payload.names,
        sources: action.payload.sources,
        link: action.payload.link,
      });
    },

    removeScripts(state, action) {
      state.scripts = state.scripts.filter(
        (script) => script.id !== action.payload.id
      );
    },
  },
});

export const { addScripts, removeScripts } = scriptSlice.actions;

export default scriptSlice.reducer;
