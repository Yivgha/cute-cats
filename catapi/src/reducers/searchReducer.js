import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllValues,
  fetchByLimit,
  fetchAscended,
  fetchDescended,
  fetchRandom,
  fetchByName,
  fetchImgToVote,
  fetchAddVote,
  fetchAllVotes,
  fetchAddToFav,
  fetchAllFavs,
  fetchDeleteFav,
  fetchRandomByLimit,
  fetchUploadImg,
  fetchMyUploads
} from "../api/catapi";

const initialState = {
  searchResults: [],
  inpSearch: "",
  inputSearchRes: [],
  limit: 10,
  order: "asc",
  status: "idle",
  selectedIdData: {},
  imgForVote: [],
  votingLogs: [],
  favLogs: [],
  randomSearch: [],
 myUploads: []
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
      .addCase(fetchRandom.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRandom.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchRandom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.randomSearch = action.payload;
        state.order = action.payload.order;
      })
      .addCase(fetchRandomByLimit.pending, (state, action) =>{
        state.status = "loading";
      })
      .addCase(fetchRandomByLimit.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchRandomByLimit.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.randomSearch = action.payload;
        state.order = action.payload.order;
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
        state.imgForVote = action.payload;
      })
      .addCase(fetchAddVote.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddVote.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchAddVote.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchAllVotes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllVotes.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchAllVotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.votingLogs = action.payload;
      })
      .addCase(fetchAddToFav.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddToFav.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchAddToFav.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchAllFavs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllFavs.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchAllFavs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favLogs = action.payload;
      })
      .addCase(fetchDeleteFav.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchDeleteFav.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchDeleteFav.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchUploadImg.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchUploadImg.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchUploadImg.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchMyUploads.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchMyUploads.rejected, (state, action) => {
        state.status = "failed";
        console.log("rejected data store ", state, action);
        state.error = action.error.message;
      })
      .addCase(fetchMyUploads.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.myUploads = action.payload
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
export const oneCatData = (state) => state.search.selectedIdData;
export const imgForVote = (state) => state.search.imgForVote[0];
export const votingLogs = (state) => state.search.votingLogs;
export const favouritesLogs = (state) => state.search.favLogs;
export const randomSearch = (state) => state.search.randomSearch;
export const allUploads = (state) => state.search.myUploads;

export default searchSlice.reducer;
