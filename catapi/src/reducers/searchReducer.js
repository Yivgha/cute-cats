import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllValues,
  fetchByLimit,
  fetchAscended,
  fetchDescended,
} from "../api/catapi";

const initialState = {
  searchResults: [],
  limit: 10,
  order: "default asc",
  status: "idle",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllValues.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllValues.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchAllValues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(fetchByLimit.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchByLimit.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchByLimit.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
        state.limit = action.payload.length;
      })
      .addCase(fetchAscended.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAscended.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchAscended.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
        state.order = "ASC";
      })
      .addCase(fetchDescended.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDescended.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchDescended.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
        state.order = "DESC";
      })
      .addDefaultCase((state, action) => {
        initialState;
      });
  },
});

export const { SET_FIRST_RESULT, RESET_RESULTS } = searchSlice.actions;
export const selectRES = (state) => state.search.searchResults;
export const myStatus = (state) => state.search.status;
export const byLimit = (state) => state.search.limit;
export const selectOrder = (state) => state.search.order;

export default searchSlice.reducer;
