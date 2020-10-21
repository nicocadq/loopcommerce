export const getObjectByProp = (param, prop, arrayOfObjects) => {
  return arrayOfObjects.find((object) => object[prop] === param);
};

export const filterByProp = (param, prop, arrayOfObjects) => {
  return arrayOfObjects.filter((object) => object[prop] !== param);
};
