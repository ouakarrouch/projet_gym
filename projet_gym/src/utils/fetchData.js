
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'ad49f28de7msha5ccae1ec0082b1p17c0dejsn44bdd6187b3e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData = async (url, options) =>
 {

const response = await fetch(url,options);
const data = await response.json();


return data

}