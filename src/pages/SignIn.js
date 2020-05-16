import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  Form,
  ServerMessage,
  FormWrap,
  FormField,
  InputWrap,
  H1,
  PageGradient,
} from "../components/global/Styles";
import useForm from "../hooks/useForm";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import userFetch from "../api/userFetch";

// EMAIL MUST BE 'test@example.com' TO LOGIN

const StyledH1 = styled(H1)`
  padding-bottom: 0.3rem;
  text-align: left;
  width: 100%;
  text-transform: uppercase;
`;

// Fields to be used for validation
const FIELDS = ["email", "password"];

const SignIn = () => {
  // Detect whether or not user exists once form is created
  const [formSuccess, setFormSuccess] = useState(false);

  // Server message from attempting to create user
  const [serverMessage, setServerMessage] = useState(null);

  // Set user context for global state when form submits
  const { setUser } = useContext(UserContext);

  // Callback to run upon form submission
  const submitForm = async ({ email, password }) => {
    const response = await userFetch();
    const { results } = response;
    const emails = results.reduce((acc, obj) => {
      return [...acc, obj.email];
    }, []);

    // Grab result from db if exists
    const result = results[emails.indexOf(email)] || null;
    const emailResult = result ? result.email : "";
    const passwordResult = result ? result.password : "";

    // compare results withgiven in inputs
    if (result && emailResult === email && passwordResult === password) {
      setServerMessage(`Welcome Back, ${result.firstName}`);

      localStorage.setItem("userData", JSON.stringify(results[0]));
      setUser(results[0]);
      setFormSuccess(true);
    } else {
      setServerMessage("Invalid Credentials");
    }
  };

  // Form objects imported from useForm with callback
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    FIELDS
  );

  if (!formSuccess) {
    return (
      <PageGradient>
        {serverMessage && <ServerMessage>{serverMessage}</ServerMessage>}
        <Form noValidate onSubmit={handleSubmit}>
          <FormWrap>
            <StyledH1>Log In</StyledH1>
            <FormField>
              <label>Email</label>
              <InputWrap>
                <input
                  type="email"
                  name="email"
                  values={values.email}
                  onChange={handleChange}
                  placeholder="test@example.com"
                />
                {errors.email && <p>{errors.email}</p>}
              </InputWrap>
            </FormField>
            <FormField>
              <label>Password</label>
              <InputWrap>
                <input
                  type="password"
                  name="password"
                  values={values.password}
                  onChange={handleChange}
                  placeholder="password"
                />
                {errors.password && <p>{errors.password}</p>}
              </InputWrap>
            </FormField>
            <button type="submit">Submit</button>
          </FormWrap>
        </Form>
      </PageGradient>
    );
  } else {
    return <Redirect to="/authorized" />;
  }
};

export default SignIn;
