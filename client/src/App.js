import React, { Component } from "react";
import Browse from "./Components/Browse/Browse.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { firebase } from "./firebase";

import NoMatch from "./Components/NoMatch.jsx";
import GamePage from "./Components/GamePage/GamePage.jsx";
import "./App.css";

import Navigation from "./Components/Navbar/Navigation";
import LandingPage from "./Components/AuthPages/Landing";
import SignUpPage from "./Components/AuthPages/SignUp";
import SignInPage from "./Components/AuthPages/SignIn";
import ForgotPasswordPage from "./Components/AuthPages/ForgotPW";
import HomePage from "./Components/AuthPages/Home";
import DashboardPage from "./Components/AuthPages/Dashboard";

import * as routes from "./routes/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { authUser: null };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <hr />
          <Navigation authUser={this.state.authUser} />

          <hr />

          {/* <Nav /> */}
          <Switch>
            {/* <Route exact path='/' component={Browse} /> */}

            <Route
              exact
              path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact
              path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact
              path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact
              path={routes.FORGOT_PW}
              component={() => <ForgotPasswordPage />}
            />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route
              exact
              path={routes.DASHBOARD}
              component={() => <DashboardPage />}
            />

            <Route exact path="/search" component={Browse} />
            <Route exact path="/games/:name" component={GamePage} />
            {/* <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/user/:id" component={Profile} /> */}
            <Route exact path="/game/:id" component={GamePage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
