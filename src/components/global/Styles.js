import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

    html {
        width: 100%;
        height: 100%;
        font-size: 10px;
    }

    body {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    html,
    body {
        margin: 0px;
        padding: 0px;
    }

    #root {
        width: 100%;
    }

    button {
        -webkit-appearance: none;
    }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.white};
  border-radius: 5rem;
  width: 80%;
  max-width: 80rem;
  min-width: 30rem;
  box-shadow: 1rem 1rem 3.8rem -0.8rem rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 2.6rem auto;
  @media (min-width: 768px) {
    margin: 5rem auto;
  }

  label {
    display: block;
    margin: 0 0 1rem;
    color: ${(props) => props.theme.grey};
    font-size: 1.2rem;
    line-height: 1;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font};
  }

  button {
    outline: none;
    background-color: ${(props) => props.theme.primaryColor};
    width: 100%;
    border: 0;
    border-radius: 0.4rem;
    padding: 1.2rem 2rem;
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.font};
    text-transform: uppercase;
    cursor: pointer;
    margin: 2rem auto;
    font-size: 1.4rem;
  }
`;

export const ServerMessage = styled.div`
  position: absolute;
  top: 20rem;
  color: ${(props) => props.theme.red};
  background: $white;
  height: 5rem;
  line-height: 5rem;
  padding: 0 2rem;
  font-size: 1.6rem;
  border-radius: 3rem;
  font-family: ${(props) => props.theme.font};
  text-transform: uppercase;
  font-weight: 600;
`;

export const FormWrap = styled.div`
  width: calc(100% - 10rem);
`;

export const FormField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 2rem;
  flex-flow: column;
  width: 100%;
`;

export const InputWrap = styled.div`
  input {
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 0.4rem;
    box-sizing: border-box;
    padding: 1.2rem 2rem;
    color: rgba(0, 0, 0, 0.6);
    font-family: ${(props) => props.theme.font};
    font-size: 1.2rem;
    line-height: inherit;
  }
  p {
    font-family: ${(props) => props.theme.font};
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.red};
    text-transform: uppercase;
    margin: 0;
  }
`;

export const PageGradient = styled.div`
  height: calc(100% - 5rem);
  background: ${(props) => props.theme.mainGradient};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.primaryColor};
  position: relative;
  font-size: 2.6rem;
`;

export default GlobalStyle;
