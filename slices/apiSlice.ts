import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    hasError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { startLoading, hasError, resetError } = apiSlice.actions;

export default apiSlice.reducer;
