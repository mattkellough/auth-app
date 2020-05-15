const formValidator = (values) => {
  // initialize empty errors objecy
  const errors = {};
  const valueKeys = Object.keys(values);

  // check if any fields are empty
  valueKeys.map((key) => {
    const value = values[key];
    if (!value) {
      errors[key] = "Field cannot be empty";
    }

    return true;
  });

  // Special extra validations

  if (!errors["email"] && !/\S+@\S+\.\S+/.test(values.email)) {
    // simple regex to test email input
    errors["email"] = "Email address is invalid";
  }

  if (!errors["password"] && values.password.length < 8) {
    errors["password"] = "Password needs to be 8 characters or greater";
  }

  return errors;
};

export default formValidator;
