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

const SignUp = () => {
  // Fields to be used for validation
  const fields = ["fname", "lname", "email", "password"];

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

    if (emails.indexOf(email) !== -1) {
      setServerMessage("User successfully added");
      localStorage.setItem("userData", JSON.stringify(results[0]));
      setUser(results[0]);
      setFormSuccess(true);
    } else {
      setServerMessage("User already exists");
    }
  }

  if (!formSuccess) {
    return (
      <PageGradient>
        {serverMessage && <ServerMessage>{serverMessage}</ServerMessage>}
        <Form noValidate onSubmit={handleSubmit} method="post">
          <FormWrap>
            <StyledH1>Sign Up</StyledH1>
            <FormField>
              <label>First Name</label>
              <InputWrap>
                <input
                  type="text"
                  name="fname"
                  values={values.fname}
                  onChange={handleChange}
                />
                {errors.fname && <p>{errors.fname}</p>}
              </InputWrap>
            </FormField>
            <FormField>
              <label>Last Name</label>
              <InputWrap>
                <input
                  type="text"
                  name="lname"
                  values={values.lname}
                  onChange={handleChange}
                />
                {errors.lname && <p>{errors.lname}</p>}
              </InputWrap>
            </FormField>
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
              <label>Password (Must be 8 characters or longer)</label>
              <InputWrap>
                <input
                  type="password"
                  name="password"
                  values={values.password}
                  onChange={handleChange}
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

export default SignUp;
