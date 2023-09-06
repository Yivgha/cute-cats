import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import {searchSlice} from './searchReducer';

const rootReducer = combineReducers({
    [searchSlice.name]: searchSlice.reducer
})

const Store = configureStore({
    reducer: rootReducer
});

export default Store;

