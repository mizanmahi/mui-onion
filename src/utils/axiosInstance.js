import axios from 'axios';

const headers = {
   'Content-Type': 'application/json',
   Accept: 'application/json',
};

// let token = localStorage.getItem('token');
// console.log(token);
// if (token) {
//    headers.Authorization = `Bearer ${token}`;
// }

const baseURL = 'http://localhost:5000';

//* creating an axios instance with some basic configuration
export const axiosInstance = axios.create({
   baseURL,
   headers,
});
