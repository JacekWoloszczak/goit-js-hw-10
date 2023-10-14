import SlimSelect from 'slim-select';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

const selectCats = document.querySelector('.breed-select');
console.log(selectCats);
const loader = document.querySelector('.loader');
console.log(loader);
const error = document.querySelector('.error');
console.log(error);
const catDiv = document.querySelector('.cat-info');
console.log(catDiv);

selectCats.append(fetchBreeds);
