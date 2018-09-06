const fetch = require("node-fetch");
const getPeople = require("./script2");

describe("getPeople swapi", () => {
  test("calls swapi to get people, 5 min", () => {
    expect.assertions(2);
    return getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThanOrEqual(5);
    });
  });
});
