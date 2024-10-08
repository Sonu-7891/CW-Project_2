import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import the slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your slice here
  },
});

export default store;
