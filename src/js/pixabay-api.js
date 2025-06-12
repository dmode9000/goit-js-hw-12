import axios from 'axios';
import { showMessage } from './render-functions';

const API_KEY = '50783021-cc03e5dbcf508bf27b2e23464';
const API_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(API_URL, {
      params: {
        key: API_KEY,
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      throw error;
    });
}
