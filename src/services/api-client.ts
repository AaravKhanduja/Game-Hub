import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '5459fbaac138473ba752c84a8ec978f5'
  },
});


