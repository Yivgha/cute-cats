import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = "live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT"


//later change limit to full
export const fetchAllValues = createAsyncThunk(
    "search/fetchAllValues",
    async () => {
        const params = {
            api_key: API_KEY,
            limit: 10,
            order: "ASC",
        }
        const url = `${API_URL}/breeds`

        const response = await axios.get(url, {params});
         console.log("got all values for store", response.data);
         return response.data;
    }
);

export const fetchByLimit = createAsyncThunk(
    "search/fetchByLimit",
    async (limit) => {
        const params = {
    api_key: API_KEY,
    limit: limit,
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


// export const fetchCatByBreed = async (limit, order, breedId) => {
//     const url = `${API_URL}/images/search?limit=${limit}&order=${order}&api_key=${API_KEY}&breed_ids=${breedId}`
//     await fetch(url, { headers: { 'x-api-key': API_KEY } });

//     if (!res.ok) {
//         throw new Error(res.status)
//     }
//     return res.json();
// };
