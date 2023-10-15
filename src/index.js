import SlimSelect from 'slim-select';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

import Notiflix from 'notiflix';
// import SlimSelect from 'slim-select';

const selectCats = document.querySelector('.breed-select');
// console.log(selectCats);
const loader = document.querySelector('.loader');
// console.log(loader);
const error = document.querySelector('.error');
// console.log(error);
const catDiv = document.querySelector('.cat-info');
// console.log(catDiv);

error.style.opacity = 0;
loader.style.opacity = 0;
function getError() {
  loader.style.opacity = 0;
  error.style.opacity = 1;
  console.log(error);
}

fetchBreeds(selectCats)
  .then(resolve => {
    catsLink(resolve);
  })
  .catch(error => {
    return getError;
  });

const catsLink = catsRules => {
  catsRules.forEach(i => {
    const cats = document.createElement('option');

    selectCats.append(cats);
    cats.textContent = i.name;
    cats.value = i.id;
    console.log(cats);
  });
};
const imgCats = showKitty => {
  loader.style.opacity = 1;
  fetchCatByBreed(selectCats.value)
    .then(resolve => {
      description(resolve);
    })
    .catch(error => {
      return getError;
    });
};

const description = img => {
  fetchBreeds(selectCats.value)
    .then(resolve => {
      const check = resolve.find(option => option.id === selectCats.value);

      catDiv.innerHTML = `
          <h2>${check.name}</h2>
          
          <img src="${img.url}"height="400"></img>
          <p>${check.description}</p>
          <p><b>Temperament: </b>${check.temperament}</p>`;
      catDiv.style.display = 'block';
      loader.style.opacity = 0;
    })
    .catch(error => {
      return console.log(error);
    });
};

selectCats.addEventListener('change', imgCats);
