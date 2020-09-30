export function validateEmail(email) {
  let error = "";

  if (!email) {
    error = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    error = "Invalid email.";
  }

  return error;
}
