import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/';

const key =
  'live_dC0aHdcihMTa1ONmCu7ouZ3VsgrO0krSDrbe90FVyIjDro7JIBVuBP7IjW5h8WIr';

axios.defaults.headers.common['x-api-key'] = key;
export const fetchBreeds = () => {
  return axios
    .get(`${API_URL}breeds?api_key=${key}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return console.log(error);
    });
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`${API_URL}images/search?breed_ids=${breedId}&api_key=${key}`)
    .then(response => {
      return response.data[0];
    })
    .catch(error => {
      return console.log(error);
    });
};
