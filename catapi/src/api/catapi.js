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
        
        return response.data
    }
)

export const fetchRandom = createAsyncThunk(
    "search/fetchRandom",
    async(limit, order, mime_types)=> {
        const params = {
            api_key: API_KEY,
            limit: limit,
            order: order,
            mime_types: mime_types
        };
         const url = `${API_URL}/images/search`;
        const response = await axios.get(url, {params});
        console.log("random", response.data);
        return response.data
    }
);

export const fetchRandomByLimit = createAsyncThunk(
    "search/fetchRandomByLimit",
    async (limit, order) => {
        const params = {
            api_key: API_KEY,
            limit: limit,
            order: order,
        };
         const url = `${API_URL}/images/search`;
        const response = await axios.get(url, {params});
        console.log("random limit", response.data);
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
        const url = `${API_URL}/images/search`;
        const response = await axios.get(url, { params });
        
        return response.data
    }
);

export const fetchAddVote = createAsyncThunk(
    "search/fetchAddVote",
    async ({image_id, value}) => {
        const url = `${API_URL}/votes?api_key=${API_KEY}`;
        const response = await axios.post(url, {image_id: image_id, value: value });
    
        return response.data
    }
)

export const fetchAllVotes = createAsyncThunk(
    "search/fetchAllVotes",
    async ({limit}) => {
        const params = {
            api_key: API_KEY,
            limit: limit,
            order: "DESC",
        };
        const url = `${API_URL}/votes`;
        const response = await axios.get(url, { params });
 
        return response.data
    }
)

export const fetchAddToFav = createAsyncThunk(
    "search/fetchAddToFav",
    async ({image_id}) => {
        const url = `${API_URL}/favourites?api_key=${API_KEY}`;
        const response = await axios.post(url, { image_id: image_id });
        
        return response.data
    }
)

export const fetchAllFavs = createAsyncThunk(
    "search/fetchAllFavs",
    async ({limit}) => {
        const params = {
            api_key: API_KEY,
            limit: limit,
            order: "DESC"
        };
        const url = `${API_URL}/favourites`;
        const response = await axios.get(url, { params });
  
        return response.data
    }
)

export const fetchDeleteFav = createAsyncThunk(
    "search/fetchDeleteFav",
    async ({id}) => {
        const url = `${API_URL}/favourites/${id}?api_key=${API_KEY}`;
        const response = await axios.delete(url)

        return response.data
    }
)

export const fetchUploadImg = createAsyncThunk(
    "search/fetchUploadImg",
    async (image) => {
        const url = `${API_URL}/images/upload?api_key=${API_KEY}`;
        const response = await axios.post(url, {file: image},
    {headers: {
      'Content-Type': 'multipart/form-data'
    }})

        return response.data
    }
)

export const fetchMyUploads = createAsyncThunk(
    "search/fetchMyUploads",
    async ({limit, order, mime_types, page}) => {
        const params = {
            api_key: API_KEY,
            limit: limit,
            page: page,
            order: order, 
            mime_types: mime_types
        }
        const url = `${API_URL}/images`;
        const response = await axios.get(url, { params });

        return response.data
    }
)