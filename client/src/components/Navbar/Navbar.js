import React from "react";
import { Link } from "react-router-dom";
import {Modal, ModalBody}from "reactstrap";
import SignUpForm from "../AuthPages/SignUp";

import { Navbar } from "reactstrap";
import "./Navbar.css";

// import * as routes from "../../routes/routes";

import "./Navbar.css";

import SignInModal from "../AuthPages/SignInModal";
import SignOutButton from "../AuthPages/SignOut";
import "../AuthPages/modalstyle.css";

// use authUser object for session handling later
const NavBar = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNoAuth />}</div>
);

const NavigationAuth = () => (
  <Navbar className="navbar navbar-dark">
    <span className="navbar-brand float-left">
      <Link to="/myfeed">lfg-app</Link>
    </span>

    <ul className="nav nav-pills nav-fill mr-auto mt-2 mt-lg-0 pull-left">
      <li className="nav-item">
        <Link to="/search">search</Link>
      </li>

      <li className="nav-item">
        <Link to="/myprofile">profile</Link>
      </li>
    </ul>

    <ul className="nav nav-pills nav-fill ml-auto my-2 my-lg-0">
      <li className="nav-button my-2 my-lg-0 pull-right">
        <SignOutButton />
      </li>
    </ul>
  </Navbar>
);

class NavigationNoAuth extends React.Component {
  state = {
    showSignInModal: false,
    showSignUpModal: false
  };

  toggleSignUp = () => {
    this.setState({
      showSignInModal: false,
      showSignUpModal: !this.state.showSignUpModal
    });
  };

  toggleSignIn = () => {
    this.setState({
      showSignInModal: !this.state.showSignInModal,
      showSignUpModal: this.state.showSignUpModal
    });
  };

  render() {
    return (
      <Navbar className="navbar navbar-dark">
        <span className="navbar-brand float-left">
          {this.props.authUser ? <Link to="/myfeed">lfg-app</Link> : <Link to="/search">lfg-app</Link>}
        </span>

        <ul className="nav nav-pills nav-fill mr-auto mt-2 mt-lg-0 pull-left">
          <li className="nav-item">
            <Link to="/search">search</Link>
          </li>
        </ul>

        <ul className="nav nav-pills nav-fill ml-auto my-2 my-lg-0">
          <li className="nav-button my-2 my-lg-0 pull-right">
            {/* <Link to={routes.SIGN_IN}>SignIn</Link> */}
            <SignInModal
              button="sign in"
              className="nav-button"
              signIn={this.state.showSignInModal}
              signUp={this.state.showSignUpModal}
              toggleSignIn={this.toggleSignIn}
              toggleSignUp={this.toggleSignUp}
            />
            <Modal
              isOpen={this.state.showSignUpModal}
              toggle={this.toggleSignUp}
            >
              <div className="modal-header">{`sign up`}</div>
              <ModalBody>
                <div className="container">
                  <ul className="col">
                    <SignUpForm />
                  </ul>
                </div>
              </ModalBody>
              <div className="modal-footer">
                <p>{`Do you have an account? Sign In `}</p>
              </div>
            </Modal>
          </li>
        </ul>
      </Navbar>
    );
  }
}

export default NavBar;
