import { useState, useEffect } from "react";
import formValidator from "../utils/formValidator";

// callback and fields to be passed by parent component
const useForm = (callbackFunction, fields) => {
  // Grab fields and create intialState
  const initialState = fields.reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});

  const [values, setValues] = useState({
    ...initialState,
  });

  const [errors, setErrors] = useState({});

  // Prevents submit callback from running on init
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Change function for inputs
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Copy values into value state and then update value currently being modified by input
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Submit Function that will be called onSubmit for Forms
  const handleSubmit = (event) => {
    event.preventDefault();

    // Pass errors to be handled in formValidator helper
    setErrors(formValidator(values));
    // Allow submit function callback to run if no errors
    setIsSubmitting(true);
  };

  // Only run when errors change
  useEffect(() => {
    // Check for no errors and submit click before running callback
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // Callback function to be defined inside of parent form component
      callbackFunction(values);
    }
  }, [errors, isSubmitting, callbackFunction, values]);

  // return objects to use in parent component
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
