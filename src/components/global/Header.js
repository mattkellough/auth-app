import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";

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
    <div className="nav">
      <div className="wrap">
        <Link to="/" className="logo">
          <img
            src="https://res.cloudinary.com/mattkellough/image/upload/v1572189951/apple-white.svg"
            alt="Apple Logo"
          />
        </Link>
        <div className="header-links">
          {!user ? (
            currentPage !== "/" && (
              <>
                {currentPage !== "/sign-in" && (
                  <Link to="/sign-in">Log In</Link>
                )}
                {currentPage !== "/sign-up" && (
                  <Link to="/sign-up">Sign Up</Link>
                )}
              </>
            )
          ) : (
            <>
              <p>Hello, {user.firstName}</p>
              <button onClick={signOut}>Log Out</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
