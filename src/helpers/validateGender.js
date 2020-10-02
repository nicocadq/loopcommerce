export function validateGender(gender) {
  let error = "";

  if (!gender) {
    error = "Gender is required";
  }

  return error;
}
