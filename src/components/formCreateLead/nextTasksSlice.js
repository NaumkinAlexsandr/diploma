import { createSlice } from "@reduxjs/toolkit";

const nextTasksSlice = createSlice({
  name: "nextTasks",
  initialState: {
    nextTasks: [],
  },
  reducers: {
    addNextTask(state, action) {
      state.nextTasks.push({
        id: state.nextTasks.length + 1,
        nextTask: action.payload.nextTask,
      });
    },

    removeNextTask(state, action) {
      state.nextTasks = state.nextTasks.filter(
        (nextTask) => nextTask.id !== action.payload.id
      );
    },
  },
});

export const { addNextTask, removeNextTask } = nextTasksSlice.actions;

export default nextTasksSlice.reducer;

/* 
 addName(state, action) {
      state.leads.push({
        id: state.leads.length + 1,
        names: action.payload.names,
        source: action.payload.source,
        budget: action.payload.budget,
        nextTask: action.payload.nextTask,
        contacts: action.payload.contacts,
      });
    },
*/
