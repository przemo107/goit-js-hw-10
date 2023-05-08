export function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
