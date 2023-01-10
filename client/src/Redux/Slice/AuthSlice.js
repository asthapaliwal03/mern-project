import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  data:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    getAuthValue: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    getAuthSuccess: (state, action) => {
      return {
       data:action.payload,
       loading:false,
      };
    },
  },
  extraReducers: (builder) => {
    
  },
});

export const { getAuthValue, getAuthSuccess } = authSlice.actions;

export default authSlice.reducer;
