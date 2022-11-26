import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push({
        id: state.contacts.length + 1,
        contact: action.payload.contact,
      });
    },
    removeContacts(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
