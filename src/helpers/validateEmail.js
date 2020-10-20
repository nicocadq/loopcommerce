export function validateEmail(email) {
  if (!email) {
    return "Email is required";
  } else if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return "Invalid email.";
  }
}
