const authTypes = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
};

const currentProductTypes = {
  SET_CURRENT_PRODUCT: "SET_CURRENT_PRODUCT",
  DELETE_CURRENT_PRODUCT: "DELETE_CURRENT_PRODUCT",
};

export default {
  ...authTypes,
  ...currentProductTypes,
};
