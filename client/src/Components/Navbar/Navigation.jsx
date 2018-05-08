import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../routes/routes";

import "./Navbar.css";
import SignOutButton from "../AuthPages/SignOut";
import SignInModal from "../AuthPages/SignInModal";

// use authUser object for session handling later
const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNoAuth />}</div>
);

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">LFG</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <a className="nav-link" href="/myfeed">My Feed <span class="sr-only">(current)</span></a> */}
        <Link to ="/myfeed">My Feed</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/browse">Browse</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/search">Search</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    {/* { userOption } */}
      <li className="nav-item">
        <a className="nav-link" href="/myprofile">My Profile</a>
      </li>
      <li>
      <SignOutButton />
      </li>
      </ul>
</div>
</nav>


  // <ol>
  //   <li>
  //     <Link to={routes.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={routes.HOME}>Home</Link>
  //   </li>
  //   <li>
  //     <Link to={routes.DASHBOARD}>Dashboard</Link>
  //   </li>
  //   <li>
  //     <Link to={}>My Profile</Link>
  //     <SignOutButton />
  //   </li>
  // </ol>
);

const NavigationNoAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">LFG</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/browse">Browse</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/search">Search</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li>
      {/* <Link to={routes.SIGN_IN}>SignIn</Link> */}
      <SignInModal />
    </li>
      </ul>
</div>
</nav>


  // <ol>
  //   <li>
  //     <Link to={routes.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={routes.SIGN_IN}>SignIn</Link>
  //   </li>
  // </ol>
);

export default Navigation;
