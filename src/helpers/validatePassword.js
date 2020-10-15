export function validatePassword(password) {
  let error;

  if (!password) {
    error = "Password is required.";
  } else if (password.length <= 8) {
    error = "Password must be 8 or more characters";
  }

  return error;
}
