const googleDatabase = [
  "cats.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavcats.com",
  "myfavcats2.com"
];

const googleSearch = (searchInput, db) => {
  return new Promise((resolve, reject) => {
    const matches = db.filter(website => {
      return website.includes(searchInput);
    });
    resolve(matches.length > 3 ? matches.slice(0, 3) : matches);
  });
};

module.exports = googleSearch;
