import { createSlice } from "@reduxjs/toolkit";

const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    leads: [],
  },
  reducers: {
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
    // addSource(state, action) {
    //   state.leads.push({
    //     id: state.leads.length + 1,
    //     source: action.payload.source,
    //   });
    // },
    // addBudget(state, action) {
    //   state.leads.push({
    //     id: state.leads.length + 1,
    //     budget: action.payload.budget,
    //   });
    // },
    // addNextTask(state, action) {
    //   state.leads.push({
    //     id: state.leads.length + 1,
    //     nextTask: action.payload.nextTask,
    //   });
    // },
    // addContacts(state, action) {
    //   state.leads.push({
    //     id: state.leads.length + 1,
    //     contacts: action.payload.contacts,
    //   });
    // },
    removeTodo(state, action) {
      state.leads = state.leads.filter((lead) => lead.id !== action.payload.id);
    },
  },
});

export const {
  addName,
  // addSource,
  // addBudget,
  // addNextTask,
  // addContacts,
  removeTodo,
} = leadsSlice.actions;

export default leadsSlice.reducer;

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
