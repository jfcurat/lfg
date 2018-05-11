import React, { Component } from "react";
import Browse from "./Components/Browse/Browse.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { firebase } from "./firebase";

import NoMatch from "./Components/NoMatch.jsx";
import GamePage from "./Components/GamePage/GamePage.jsx";
import "./App.css";

import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/Navbar/Navbar";

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
          <NavBar authUser={this.state.authUser} />
          <Switch>
            <Route exact path="/search" component={Browse} />
            <Route exact path="/myprofile" component={Profile} />
            <Route exact path="/user/:id" component={Profile} />
            <Route exact path="/game/:id" component={GamePage} />
            <Route component={NoMatch} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
