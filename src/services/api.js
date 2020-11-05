import axios from 'axios';



const baseURL = 'http://localhost:8000/api'
const axiosApi = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})

export const getToken = (creds) => {
  const jsonParm = JSON.stringify(creds);
  return axiosApi.post('getToken', jsonParm);
}

export const getUser = (token) => {
  console.log(token);
  return axiosApi.get('user',{
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  });
}