export default (object) => {
  return JSON.parse(JSON.stringify(object, (key, value) => value ?? undefined));
};
