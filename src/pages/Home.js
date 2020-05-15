import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const DarkBackground = styled.div`
  height: calc(100% - 5rem);
  background: ${(props) => props.theme.mainGradient};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingBox = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 20rem;
  border-radius: 5rem;
  width: 80%;
  max-width: 50rem;
  min-width: 30rem;
  box-shadow: 1rem 1rem 3.8rem -0.8rem rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  a {
    font-family: ${(props) => props.theme.font};
    font-size: 1.6rem;
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
    margin: 0 0.8rem;
    text-transform: uppercase;
    transition: color 150ms ease-in;
    &:hover {
      color: ${(props) => props.theme.grey};
    }
  }
`;

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <DarkBackground>
      <FloatingBox>
        <Links>
          {!user ? (
            <>
              <Link to="/sign-in">Log In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </>
          ) : (
            <Link to="/authorized">Go To My Dashboard</Link>
          )}
        </Links>
      </FloatingBox>
    </DarkBackground>
  );
};

export default Home;
