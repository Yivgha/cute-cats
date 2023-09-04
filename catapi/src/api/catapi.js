const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = "live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT"

// export const fetchAll = async (limit, order) => {
//     const url = `${API_URL}/breeds?limit=${limit}&order=${order}&api_key=${API_KEY}`
//     await fetch(url, { headers: { 'x-api-key': API_KEY } });
//     if (!res.ok) {
//         throw new Error(res.status)
//     }
//     return res.json();    
// };

// export const fetchCatByBreed = async (limit, order, breedId) => {
//     const url = `${API_URL}/images/search?limit=${limit}&order=${order}&api_key=${API_KEY}&breed_ids=${breedId}`
//     await fetch(url, { headers: { 'x-api-key': API_KEY } });

//     if (!res.ok) {
//         throw new Error(res.status)
//     }
//     return res.json();
// };

// export const fetchByLimit = async (limit, order) => {
//     const url = `${API_URL}?limit=${limit}&order=${order}&api_key=${API_KEY}`
//     await fetch(url, { headers: { 'x-api-key': API_KEY } });
//     if (!res.ok) {
//         throw new Error(res.status)
//     }
//     return res.json();
//   };