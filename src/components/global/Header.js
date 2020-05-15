import React, { useContext } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../context/UserContext";

const Nav = styled.div`
  background: ${(props) => props.theme.white};
  padding: 0;
  margin: 0;
  height: 5rem;
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 180rem;
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  p,
  a,
  button {
    font-family: ${(props) => props.theme.font};
    margin: 0 0.5rem;
  }

  p {
    font-size: 1.6rem;
  }

  button {
    border: none;
    border-radius: 2rem;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.white};
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0 1rem;
    cursor: pointer;
    transition: background-color 150ms linear;
    text-decoration: none;
    &:hover {
      background-color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

const NavLinkButton = styled(NavLink)`
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0 1rem;
  cursor: pointer;
  transition: background-color 150ms linear;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

const Logo = styled(Link)`
  border-radius: 0;
  height: 5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.black};
  img {
    padding: 1rem;
    height: calc(100% - 2rem);
    width: auto;
  }
`;

const TextLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.grey};
  font-size: 1.6rem;
  margin: 0 1rem !important;
`;

const Header = ({ location }) => {
  const { user, setUser } = useContext(UserContext);
  // get current page to conditionally render links to avoid redundancy
  const currentPage = location.pathname;

  // To delete user need to set user to null as well as delete local storage item so prev state does not persist
  const signOut = (event) => {
    event.preventDefault();

    setUser(null);
    localStorage.removeItem("userData");
  };

  return (
    <Nav>
      <Wrap>
        <Logo to="/">
          <img
            src="https://res.cloudinary.com/mattkellough/image/upload/v1572189951/apple-white.svg"
            alt="Apple Logo"
          />
        </Logo>
        <HeaderLinks>
          {!user ? (
            <>
              {currentPage !== "/sign-in" && (
                <NavLinkButton to="/sign-in">Log In</NavLinkButton>
              )}
              {currentPage !== "/sign-up" && (
                <NavLinkButton to="/sign-up">Sign Up</NavLinkButton>
              )}
            </>
          ) : (
            <>
              <TextLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000000",
                }}
                to="/iphone"
              >
                iPhone
              </TextLink>
              <TextLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000000",
                }}
                to="/mac-pro"
              >
                MacBook Pro
              </TextLink>
              <TextLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000000",
                }}
                to="/watch"
              >
                Watch
              </TextLink>
              <p>Hello, {user.firstName}</p>
              <button onClick={signOut}>Log Out</button>
            </>
          )}
        </HeaderLinks>
      </Wrap>
    </Nav>
  );
};

export default withRouter(Header);
