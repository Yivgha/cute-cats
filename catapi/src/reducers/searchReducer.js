import { createSlice, } from '@reduxjs/toolkit'
import {fetchAllValues} from "../api/catapi"

const initialState = {
    searchResults: [],
    value: 0,
    status: "idle",
};


export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        // SET_FIRST_RESULT: {
        //     reducer(state, action) {
        //         console.log("feature action : ", action);
        //     },
        //     prepare(name, id, url) {
        //         return {
        //             payload: {
        //                 name, id, url
        //             }
        //         };
        //     }
        // },
        // RESET_RESULTS: () => initialState,
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
    .addDefaultCase((state, action) => {
     initialState
    })
    }
})

export const { SET_FIRST_RESULT, RESET_RESULTS } = searchSlice.actions
export const selectRES = (state) => state.search.searchResults
export const myStatus = (state) => state.search.status

export default searchSlice.reducer;