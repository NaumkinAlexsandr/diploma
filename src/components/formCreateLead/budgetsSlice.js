import { createSlice } from "@reduxjs/toolkit";

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: {
    budgets: [],
  },
  reducers: {
    addBudget(state, action) {
      state.budgets.push({
        id: state.budgets.length + 1,
        budget: action.payload.budget,
      });
    },
    removeBudget(state, action) {
      state.budgets = state.budgets.filter(
        (budget) => budget.id !== action.payload.id
      );
    },
  },
});

export const { addBudget, removeBudget } = budgetsSlice.actions;

export default budgetsSlice.reducer;
