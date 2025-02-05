import axios from 'axios';

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) {
  throw new Error('API key is missing. Please add REACT_APP_RAWG_API_KEY to your .env file.');
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: apiKey,
  },
});


