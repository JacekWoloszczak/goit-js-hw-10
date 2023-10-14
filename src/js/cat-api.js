const API_URL = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch('https://api.thecatapi.com/v1/images/search?breed_ids=').then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
