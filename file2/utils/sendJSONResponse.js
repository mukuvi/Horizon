export const sendJSONResponse = (res, statusCode, payLoad) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = statusCode;
  res.end(JSON.stringify(payLoad));
};
