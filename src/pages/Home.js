import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="dark-background">
      <div className="floating-box">
        <div className="links">
          {!user ? (
            <>
              <Link to="/sign-in">Log In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </>
          ) : (
            <Link to="/authorized">Go To My Dashboard</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
