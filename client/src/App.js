import React, { Component } from "react";
import Browse from "./Components/Browse/Browse.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { firebase } from "./firebase";

import NoMatch from "./Components/NoMatch.jsx";
import MyFeed from "./Components/MyFeed/MyFeed";
import GamePage from "./Components/GamePage/GamePage.jsx";

import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Wrapper from './Components/Wrapper/Wrapper';

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
          <Wrapper>
          <Switch>
            <Route exact path="/" component={Browse} />          
            <Route exact path="/myfeed" component={MyFeed} />
            <Route exact path="/search" component={Browse} />
            <Route exact path="/myprofile" component={Profile} />
            <Route exact path="/user/:id" component={Profile} />
            <Route exact path="/game/:id" component={GamePage} />
            <Route component={NoMatch} />
          </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
