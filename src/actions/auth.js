import Types from "./types";

export const setUser = (user, headers) => ({
  type: Types.SET_USER,
  user,
  headers,
});

export const deleteUser = () => ({
  type: Types.DELETE_USER,
});
