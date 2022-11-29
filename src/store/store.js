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

import scriptReducer from "../components/formCreateScript/scriptSlice";
import leadsReducer from "../components/formCreateLead/leadSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  leads: leadsReducer,
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
