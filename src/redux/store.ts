import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./reducers/walletReducer";
import transactionReducer from "./reducers/transactionReducer";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
