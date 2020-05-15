import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthorizedHome from "./pages/authorized/AuthorizedHome";

// context to be used for sharing user state
import UserContext from "./context/UserContext";

const App = () => {
  // check for local storage user object so state can persist
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  // Create protected routes that check for user
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    // passed in component as Component and the rest of its properties as ...rest
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/authorized" component={AuthorizedHome} />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
