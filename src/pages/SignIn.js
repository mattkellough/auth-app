import React, { useState, useContext } from "react";
import useForm from "../hooks/useForm";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import userFetch from "../api/userFetch";

// EMAIL MUST BE 'test@example.com' TO LOGIN

const SignIn = () => {
  // Fields to be used for validation
  const fields = ["email", "password"];

  // Detect whether or not user exists once form is created
  const [formSuccess, setFormSuccess] = useState(false);

  // Server message from attempting to create user
  const [serverMessage, setServerMessage] = useState(null);

  // Form objects imported from useForm with callback
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    fields
  );

  // Set user context for global state when form submits
  const { setUser } = useContext(UserContext);

  // Callback to run upon form submission
  async function submitForm() {
    const email = values.email;
    const response = await userFetch();
    const results = response.results;
    const emails = results.reduce((acc, obj) => {
      acc.push(obj.email);
      return acc;
    }, []);

    // Grab result from db if exists
    const result = results[emails.indexOf(email)] || null;
    const emailResult = result ? result.email : "";
    const passwordResult = result ? result.password : "";

    // compare results with values given in inputs
    if (
      result &&
      emailResult === values.email &&
      passwordResult === values.password
    ) {
      setServerMessage(`Welcome Back, ${result.firstName}`);

      localStorage.setItem("userData", JSON.stringify(results[0]));
      setUser(results[0]);
      setFormSuccess(true);
    } else {
      setServerMessage("Invalid Credentials");
    }
  }

  if (!formSuccess) {
    return (
      <div className="sign-in form">
        {serverMessage && <div className="server-message">{serverMessage}</div>}
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-wrap">
            <h1>Log In</h1>
            <div className="form-field">
              <label>Email</label>
              <div className="input">
                <input
                  type="email"
                  name="email"
                  values={values.email}
                  onChange={handleChange}
                  placeholder="test@example.com"
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
            </div>
            <div className="form-field">
              <label>Password</label>
              <div className="input">
                <input
                  type="password"
                  name="password"
                  values={values.password}
                  onChange={handleChange}
                  placeholder="password"
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <Redirect to="/authorized" />;
  }
};

export default SignIn;
