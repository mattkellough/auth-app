import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import AuthorizedHome from "./pages/authorized/AuthorizedHome";

// context to be used for sharing user state
import UserContext from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);

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
        <Route exact path="/sign-in" component={SignIn} />
        <ProtectedRoute exact path="/authorized" component={AuthorizedHome} />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
