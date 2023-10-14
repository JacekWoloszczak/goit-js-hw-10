import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

axios.defaults.headers.common['x-api-key'] =
  'live_dC0aHdcihMTa1ONmCu7ouZ3VsgrO0krSDrbe90FVyIjDro7JIBVuBP7IjW5h8WIr';

const selectCats = document.querySelector('.breed-select');
console.log(selectCats);
const loader = document.querySelector('.loader');
console.log(loader);
const error = document.querySelector('.error');
console.log(error);
const catDiv = document.querySelector('.cat-info');
console.log(catDiv);
