import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import budgetReducer from "../components/formCreateLead/InputBudgetSlice";
// import contactsReducer from "../components/formCreateLead/InputContactsSlice";
// import nameReducer from "../components/formCreateLead/InputNameSlice";
// import nextTaskReducer from "../components/formCreateLead/InputNextTaskSlice";
// import sourceReducer from "../components/formCreateLead/InputSourceSlice";
import leadReducer from "../components/formCreateLead/leadSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  // leads: budgetReducer,
  // leads: contactsReducer,
  // leads: nameReducer,
  // leads: nextTaskReducer,
  // leads: sourceReducer,
  leads: leadReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

/*
import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "../components/formCreateLead/leadSlice";
export default configureStore({
  reducer: {
    leads: leadReducer,
  },
});
*/
