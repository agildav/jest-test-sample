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
    expect.assertions(1);
    return googleSearch("cat", dbMock).then(matches => {
      expect(matches).toEqual(["cat.com"]);
    });
  });

  test("returns no matches", () => {
    expect.assertions(1);
    return googleSearch("test", dbMock).then(matches => {
      expect(matches).toEqual([]);
    });
  });
  test("returns max 3 matches", () => {
    expect.assertions(1);
    return googleSearch("dog", dbMock).then(matches => {
      expect(matches.length).toEqual(3);
    });
  });
  test("works with null", () => {
    expect.assertions(1);
    return googleSearch(null, dbMock).then(matches => {
      expect(matches).toEqual([]);
    });
  });
  test("works with undefined", () => {
    expect.assertions(1);
    return googleSearch(undefined, dbMock).then(matches => {
      expect(matches).toEqual([]);
    });
  });
});
