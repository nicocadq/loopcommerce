export function validateFirstName(firstName) {
  let error = "";

  if (!firstName) {
    error = "First Name is required.";
  }

  return error;
}
