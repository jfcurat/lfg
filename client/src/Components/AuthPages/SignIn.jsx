import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';
import { auth } from "../../firebase";

const byPropKey = (propName, val) => ({
  [propName]: val
});

class SignInForm extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { ...INITIAL_STATE };
  // }
  state = {
    email: '',
    password: '',
    error: null,
  }
 
  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(async (user) => {
        console.log(user);
        await this.props.userActions.retrieveUser(user.uid);
        history.push('/search');
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
<<<<<<< HEAD
        <button type="btn-primary submit" disabled={isInvalid}>
=======
        <button type="submit" onClick={this.onSubmit} disabled={isInvalid}>
>>>>>>> master
          Sign In
        </button>

        {error && <p>{error.message}</p>}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInForm));

// export default withRouter(SignInPage);

// export { SignInForm };
