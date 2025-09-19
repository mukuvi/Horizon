import counties from "../data/data";

export const getAllData = (req, res) => {
  let filteredData = counties;
  let { name, province, capital } = req.query;
  if (name) {
    filteredData = filteredData.filter(
      (county) => county.name.toLowerCase() === name.toLowerCase()
    );
  }
  if (province) {
    filteredData = filteredData.filter(
      (county) => county.province.toLowerCase() === province.toLowerCase()
    );
  }
  if (capital) {
    filteredData = filteredData.filter(
      (county) => county.capital.toLowerCase() === capital.toLowerCase()
    );
  }
};
