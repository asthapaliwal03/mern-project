import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import getAuthValue from "./Saga/AuthSaga";
import { RootReducer } from "./Slice";

let saga = createSagaMiddleware();

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(getAuthValue);
