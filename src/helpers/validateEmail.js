export function validateEmail(email) {
  let error = "";

  if (!email) {
    error = "Email is required";
  } else if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    error = "Invalid email.";
  }

  return error;
}
