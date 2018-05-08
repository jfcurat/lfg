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
  <ol>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.DASHBOARD}>Dashboard</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ol>
);

const NavigationNoAuth = () => (
  <ol>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      {/* <Link to={routes.SIGN_IN}>SignIn</Link> */}
      <SignInModal />
    </li>
  </ol>
);

export default Navigation;
