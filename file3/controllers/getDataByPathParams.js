export const getDataByPathParams = (req, res) => {
  const { field, term } = req.params;

  const filteredData = startups.filter(
    (startup) => startup[field].toLowerCase() === term.toLowerCase()
  );

  res.json(filteredData);
};
