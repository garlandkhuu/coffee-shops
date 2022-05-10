import axios from 'axios';

const placesAxios = axios.create({
  baseURL: 'https://api.foursquare.com/v3/',
  withCredentials: true,
  headers: {
    Authorization: process.env.REACT_APP_PLACES_API_KEY || '',
    Accept: 'application/json',
  },
});

export default placesAxios;
