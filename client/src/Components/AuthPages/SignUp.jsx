import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

import { auth } from "../../firebase";
import './modalstyle.css';


const INITIAL_STATE = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  error: null
};

const byPropKey = (propName, val) => () => ({
  [propName]: val
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password1 } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, password1)
      .then(async (authUser) => {
        try {
          console.log(authUser);
          const user = await API.saveNewUser({email: authUser.email, fireBaseId: authUser.uid, userName: username});
          console.log(user);
          this.props.userActions.retrieveUser(authUser.uid);
          console.log(this.props.user);
        } catch(err) {
          console.log(err);
        }
        history.push('/myprofile');
      })
      .catch(error => {
        console.log(error);
        // this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, password1, password2, error } = this.state;

    const isInvalid =
      password1 !== password2 ||
      password1 === "" ||
      email === "" ||
      username === "";

    return (

      <form onSubmit={this.onSubmit}>
      <div className="container">
      <div className="row">
        <input
          value={username}
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
          type="text"
          placeholder="Your name"
        />
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="email"
          placeholder="Your email address"
        />
        <input
          value={password1}
          onChange={event =>
            this.setState(byPropKey("password1", event.target.value))
          }
          type="password"
          placeholder="Make a password"
        />
        <input
          value={password2}
          onChange={event =>
            this.setState(byPropKey("password2", event.target.value))
          }
          type="password"
          placeholder="Confirm your password"
        />
        <button type="submit" className="submit" disabled={isInvalid}>
          create account
        </button>

        {error && <span>{error.message}</span>}
        </div>
        </div>
      </form>

    );
  }
}




function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));

// export default withRouter(SignUpPage);

// export { SignUpForm, SignUpLink };
