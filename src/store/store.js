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

import nameReducer from "../components/formCreateLead/nameSlice";
import sourceReducer from "../components/formCreateLead/sourceSlice";
import budgetReducer from "../components/formCreateLead/budgetsSlice";
import nextTasksReducer from "../components/formCreateLead/nextTasksSlice";
import contactsReducer from "../components/formCreateLead/contactsSlice";
import scriptReducer from "../components/formCreateScript/scriptSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  names: nameReducer,
  sources: sourceReducer,
  budgets: budgetReducer,
  nextTasks: nextTasksReducer,
  contacts: contactsReducer,
  scripts: scriptReducer,
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
