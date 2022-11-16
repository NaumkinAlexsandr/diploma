import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addName(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        names: action.payload.names,
        completed: false,
      });
    },
    addSource(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        source: action.payload.source,
        completed: false,
      });
    },
    addBudget(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        budget: action.payload.budget,
        completed: false,
      });
    },
    addNextTask(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        nextTask: action.payload.nextTask,
        completed: false,
      });
    },
    addContacts(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        contacts: action.payload.contacts,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const {
  addName,
  addSource,
  addBudget,
  addNextTask,
  addContacts,
  removeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;

/* 
есть всего три reducer (addTodo, removeTodo, toggleTodoComplete),
каждый из них имеет state, action 
*/
