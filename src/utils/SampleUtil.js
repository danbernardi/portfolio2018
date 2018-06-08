export const fetchQuoteOfTheDay = () => (
  fetch('https://quotes.rest/qod', { 'Accept': 'application/json' })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
);
