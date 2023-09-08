import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllValues,
  fetchByLimit,
  fetchAscended,
  fetchDescended,
  fetchByName,
  fetchImgToVote,
} from "../api/catapi";

const initialState = {
  searchResults: [],
  inpSearch: "",
  inputSearchRes: [],
  limit: 10,
  order: "asc",
  status: "idle",
  selectedIdData: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
   setSearchText:(state, action) => {
      state.inpSearch = action.payload
    },
    setSearchTextRes: (state, action) => {
      state.inputSearchRes = action.payload
    },
    getOneCat: (state, action) => {
      state.selectedIdData = action.payload
    }
  },
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
      .addCase(fetchByName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchByName.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.inputSearchRes = action.payload;
      })
      .addCase(fetchImgToVote.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchImgToVote.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchImgToVote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addDefaultCase((state, action) => {
        initialState;
      });
  },
});

export const {setSearchText, setSearchTextRes, getOneCat } = searchSlice.actions;
export const selectRES = (state) => state.search.searchResults;
export const myStatus = (state) => state.search.status;
export const byLimit = (state) => state.search.limit;
export const selectOrder = (state) => state.search.order;
export const byInput = (state) => state.search.inputSearchRes;
export const inpVal = (state) => state.search.inpSearch;
export const oneCatData = (state) => state.search.selectedIdData

export default searchSlice.reducer;
