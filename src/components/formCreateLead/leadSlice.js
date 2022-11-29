import { createSlice } from "@reduxjs/toolkit";

const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    leads: [],
  },
  reducers: {
    addLeads(state, action) {
      state.leads.push({
        id: state.leads.length + 1,
        names: action.payload.names,
        source: action.payload.source,
        budget: action.payload.budget,
        nextTask: action.payload.nextTask,
        contacts: action.payload.contacts,
      });
    },

    removeLeads(state, action) {
      state.leads = state.leads.filter((lead) => lead.id !== action.payload.id);
    },
  },
});

export const { addLeads, removeLeads } = leadsSlice.actions;

export default leadsSlice.reducer;
