const fetch = require("node-fetch");

const getPeople = fetch => {
  const url = "https://swapi.co/api/people";
  return fetch(url)
    .then(response => response.json())
    .then(people => {
      return {
        count: people.count,
        results: people.results
      };
    });
};

module.exports = getPeople;
