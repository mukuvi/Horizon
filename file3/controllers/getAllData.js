export const getAllData = (req, res) => {
  let filteredData = startups;
  const { country, continent, city } = req.query;

  if (country) {
    filteredData = filteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }
  if (continent) {
    filteredData = filteredData.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
    );
  }
  res.json(filteredData);
};
