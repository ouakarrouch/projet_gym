import {REACT_APP_RAPID_API_KEY} from '../config'
export const exerciseOptions = {
  
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}