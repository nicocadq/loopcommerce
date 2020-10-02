export default (res) => {
  const headers = {};
  res.headers.forEach((value, name) => {
    headers[name] = value;
  });
  return headers;
};
