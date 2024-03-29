import axios from 'axios';

const B_URL = 'https://youtube-v31.p.rapidapi.com';
const REACT_APP_RAPID_API_KEY = '2a10bfb5efmsh2c51052c8ae55b3p1f3ad4jsn040788c88b0a'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchApi = async (url) => {
    const {data} = await axios.get(`${B_URL}/${url}`, options);

    return data;
  }

// export default axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3/',
//   params: {
//     part: 'snippet',
//     maxResults: 50,
//     key: import.meta.env.GOOGLE_API
//   }
// })