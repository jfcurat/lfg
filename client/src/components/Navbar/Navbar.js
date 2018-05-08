import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const MyProfile = props => {
  return (
    <li>
      <Link to="/myprofile">My Profile</Link>
    </li>
  );
};

const Login = props => {
  return (
    <li>
      <Link to="/login">Log-In/Create Account</Link>
    </li>
  );
};

// create log-in modal with firebase
// need to figure out how to pass user log-in creation into mysql

const userOption = props => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <MyProfile />;
  }
  return <Login />;
};

// Bootstrap 4.0
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      LFG
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/myfeed">My Feed</Link>
        </li>
        <li className="nav-item">
          <Link to="/browse">Browse</Link>
        </li>
        <li className="nav-item">
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        {/* { userOption } */}
        <li className="nav-item">
          <a className="nav-link" href="/myprofile">
            My Profile
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
