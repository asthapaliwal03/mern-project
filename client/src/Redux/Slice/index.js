import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";

export const RootReducer = combineReducers({
  auth: authSlice,
});
