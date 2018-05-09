import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../../utils/API";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

import { auth } from "../../firebase";

import * as routes from "../../routes/routes";

const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>
);

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
          const user = await API.saveNewUser({email: authUser.email, fireBaseId: authUser.uid, userName: this.state.username});
          console.log(user);
          this.props.userActions.retrieveUser(authUser.uid);
          console.log(this.props.user);
        } catch(err) {
          console.log(err);
        }
        // history.push(routes.HOME);
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
        <button type="submit" disabled={isInvalid}>
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    {`Don't have an account yet? `}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);


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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

// export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
