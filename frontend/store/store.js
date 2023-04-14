import cartSlice from "@/features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

// Redux Persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});
