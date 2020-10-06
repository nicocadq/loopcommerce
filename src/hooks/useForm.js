import { useState } from "react";

export const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleOnSubmit = (event, onSubmit) => {
    event.preventDefault();

    const validations = validate(values);

    setErrors(validations);

    if (Object.keys(validations).length === 0) onSubmit();
  };

  const handleOnChange = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    errors,
    handleOnChange,
    handleOnSubmit,
    values,
  };
};
