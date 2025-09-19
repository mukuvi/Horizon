import counties from "../data/data";
export const getDataByParams = (req, res) => {
  const { field, term } = req.params;
  let someData = counties.filter(
    (county) => county[field].toLowerCase() === term.toLowerCase()
  );
  res.json(someData);
};
