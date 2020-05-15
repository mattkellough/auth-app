import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "./constants";
import GlobalStyle from "./components/global/Styles";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthorizedHome from "./pages/authorized/AuthorizedHome";
import Iphone from "./pages/authorized/Iphone";
import MacBook from "./pages/authorized/MacBook";
import Watch from "./pages/authorized/Watch";

// context to be used for sharing user state
import UserContext from "./context/UserContext";

const App = () => {
  // check for local storage user object so state can persist
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  // Create protected routes that check for user
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <ProtectedRoute exact path="/authorized" component={AuthorizedHome} />
          <ProtectedRoute exact path="/iphone" component={Iphone} />
          <ProtectedRoute exact path="/mac-pro" component={MacBook} />
          <ProtectedRoute exact path="/watch" component={Watch} />
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
