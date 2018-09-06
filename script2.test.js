const getPeople = require("./script2");

const url = "https://swapi.co/api/people";

const mockFetch = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve({
        count: 87,
        results: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      })
  })
);

describe("getPeople swapi", () => {
  test("calls swapi and get people w/ count and results", () => {
    expect.assertions(4);
    return getPeople(mockFetch).then(data => {
      expect(data.count).toEqual(87);
      expect(mockFetch.mock.calls.length).toEqual(1);
      expect(mockFetch).toBeCalledWith(url);
      expect(data.results.length).toBeGreaterThanOrEqual(5);
    });
  });
});
