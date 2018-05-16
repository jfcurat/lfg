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

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as userActionCreators from "./actions/userActions.js";
import { Jumbotron, Container } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { authUser: null };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        this.setState(() => ({ authUser }))
        this.props.userActions.retrieveUser(authUser.uid);
      } else {
        this.setState(() => ({ authUser: null }));
      }
    });
    this.state;
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

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
