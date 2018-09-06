const googleSearch = (searchInput, db) => {
  return new Promise((resolve, reject) => {
    const matches = db.filter(website => {
      return website.includes(searchInput);
    });
    resolve(matches.length > 3 ? matches.slice(0, 3) : matches);
  });
};

module.exports = googleSearch;
