import axios from 'axios';

const B_URL = 'https://youtube-v31.p.rapidapi.com';
const apiKey = import.meta.env.VITE_YT_RAPID_API_KEY

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
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