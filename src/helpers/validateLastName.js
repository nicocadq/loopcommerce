export function validateLastName(lastName) {
  let error = "";

  if (!lastName) {
    error = "Last Name is required.";
  }

  return error;
}
