import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = "live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT"

export const fetchAllValues = createAsyncThunk(
    "search/fetchAllValues",
    async () => {
        const params = {
            api_key: API_KEY,
            order: "ASC",
            limit: 67,
        }
        const url = `${API_URL}/breeds`

        const response = await axios.get(url, {params});
         console.log("got all values for store", response.data);
         return response.data;
    }
);

export const fetchByLimit = createAsyncThunk(
    "search/fetchByLimit",
    async (limit, order) => {
        const params = {
        api_key: API_KEY,
        limit: limit,
        order: order
  };
        const url = `${API_URL}/breeds`;
        const response = await axios.get(url, {params});
        console.log("fetched by limit", response.data);
        return response.data
    }
)

export const fetchAscended = createAsyncThunk(
    "search/fetchAscended",
    async (limit) => {
        const params = {
            api_key: API_KEY,
            limit: limit,
            order: "ASC",
  };
        const url = `${API_URL}/breeds`;
        const response = await axios.get(url, {params});
        console.log("ascended", response.data);
        return response.data
    }
)

export const fetchDescended = createAsyncThunk(
    "search/fetchDescended",
    async (limit) => {
        const params = {
            api_key: API_KEY,
            limit: limit,
            order: "DESC",
  };
        const url = `${API_URL}/breeds`;
        const response = await axios.get(url, {params});
        console.log("descended", response.data);
        return response.data
    }
)

export const fetchByName = createAsyncThunk(
    "search/fetchByName",
    async (sliceID) => {
        const params = {
            api_key: API_KEY,
            limit: 1,
            order: "ASC",
           breed_ids: sliceID,
        };
        const url = `${API_URL}/images/search`;
        const response = await axios.get(url, { params });
        console.log("get by name", response.data);
        return response.data
    }
)

export const fetchImgToVote = createAsyncThunk(
    "search/fetchImgToVote",
    async () => {
        const params = {
            api_key: API_KEY,
            limit: 1,
        };
        const url = `${API_URL}images/search`;
        const response = await axios.get(url, { params });
        return response.data
    }
)

//  const fetchOneImg = async () => {
//     const url = `${API_URL}images/search?api_key=${API_KEY}`;
//     try {
//       await fetch(url, { headers: { "x-api-key": API_KEY } })
//       .then((res) => res.json())
//       .then((data) => setImg(data[0]));
//     } catch (error) {
//       console.log(error.message);
//     }
    
//     return img;
//   };