import Types from "./types";

export const setUser = (user) => ({
  type: Types.SET_USER,
  user,
});

export const deleteUser = () => ({
  type: Types.DELETE_USER,
});
