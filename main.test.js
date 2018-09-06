const googleSearch = require("./main");

const dbMock = [
  "cat.com",
  "cars.com",
  "carswithflow.com",
  "dog.com",
  "dogs.com",
  "dogs2.com",
  "dogs3.com",
  "disney.com"
];

describe("googleSearch", () => {
  test("returns 1 match", () => {
    googleSearch("cat", dbMock).then(matches => {
      expect(matches).toEqual(["cat.com"]);
    });
  });

  test("returns no matches", () => {
    googleSearch("test", dbMock).then(matches => {
      expect(matches).toEqual([]);
    });
  });
  test("returns max 3 matches", () => {
    googleSearch("dog", dbMock).then(matches => {
      expect(matches.length).toEqual(3);
    });
  });
  test("works with null / undefined", () => {
    googleSearch(null, dbMock).then(matches => {
      expect(matches).toEqual([]);
    });
    googleSearch(undefined, dbMock).then(matches => {
      expect(matches).toEqual([]);
    });
  });
});
