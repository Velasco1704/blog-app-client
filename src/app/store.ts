import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "../api/apiSlice";
import userReducer from "../features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    user: persistReducer<ReturnType<typeof userReducer>>(
      {
        key: "user",
        storage,
        whitelist: ["user"],
      },
      userReducer
    ),
  },
  middleware: (getDefaultSetting) =>
    getDefaultSetting({
      serializableCheck: false,
    }).concat(appApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
