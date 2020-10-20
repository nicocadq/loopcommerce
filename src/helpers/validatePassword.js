export function validatePassword(password) {
  if (!password) {
    return "Password is required.";
  } else if (password.length <= 8) {
    return "Password must be 8 or more characters";
  }
}
