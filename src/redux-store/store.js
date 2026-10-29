import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/userSlice";

const store = configureStore({
  reducer: { user: authReducer },
});

export default store;
