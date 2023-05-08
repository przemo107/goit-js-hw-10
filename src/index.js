import './css/styles.css';

const DEBOUNCE_DELAY = 300;

import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const searchBox = document.querySelector('#search-box');
const countriesList = document.querySelector('#countries-list');

function renderCountries(countries) {
  let countriesHTML = '';
  countries.forEach(country => {
    countriesHTML += `
      <div class="country">
        <h2>${country.name.official}</h2>
        <p><strong>Capital:</strong> ${country.capital.join(', ')}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.official}">
        <p><strong>Languages:</strong> ${country.languages
          .map(lang => lang.name)
          .join(', ')}</p>
      </div>
    `;
  });
  countriesList.innerHTML = countriesHTML;
}

function searchCountries() {
  const searchTerm = searchBox.value.trim();
  if (searchTerm === '') {
    countriesList.innerHTML = '';
    return;
  }
  fetchCountries(searchTerm)
    .then(countries => renderCountries(countries))
    .catch(error => console.error(error));
}

searchBox.addEventListener('input', debounce(searchCountries, 300));
