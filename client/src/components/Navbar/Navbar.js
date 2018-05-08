// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const MyProfile = (props) =>{
//   return <li><Link to ="/myprofile">My Profile</Link></li>
// };

// const LogIn = (props) => {
//   return <li><Link to="/login">Log-In/Create Account</Link></li>
// };

// // create log-in modal with firebase
// // need to figure out how to pass user log-in creation into mysql

// const userOption = (props) => {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <MyProfile />;
//   }
//   return <LogIn />
// };

// // UserOption = (props) => {
// //   const isLoggedIn = props.state.isLoggedIn;
// //   return (
// //     <div>
// //       {isLoggedIn ? (
// //         <MyProfile />
// //       ) : (
// //         <Login />
// //       )}
// //     </div>
// //   )
// // };

// // Bootstrap 3.7
// // const Navbar = props =>
// //   <nav className="navbar navbar-default">
// //     <div className="container-fluid">
// //       <div className="navbar-header">
// //         <Link className="navbar-brand" to="/">
// //           LFG
// //         </Link>
// //       </div>
// //       <ul className="navbar-nav mr-auto">
// //         <li
// //           className={
// //             window.location.pathname === "/" ||
// //             window.location.pathname === "/myfeed"
// //               ? "active"
// //               : ""
// //           }
// //         >
// //           <Link to="/">My Feed</Link>
// //         </li>
// //         <li
// //           className={window.location.pathname === "/browse" ? "active" : ""}
// //         >
// //           <Link to="/discover">Browse</Link>
// //         </li>
// //       </ul>
// //       <ul className="navbar-nav ml-auto">
// //       {/* { userOption } */}
// //       <li
// //           className={window.location.pathname === "/browse" ? "active" : ""}
// //         >
// //           <Link to="/myprofile">My Profile</Link>
// //         </li>
// //         </ul>
// //     </div>
// //   </nav>;

// // Bootstrap 4.0
// const Navbar = props =>
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="/">LFG</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           {/* <a className="nav-link" href="/myfeed">My Feed <span class="sr-only">(current)</span></a> */}
//           <Link to ="/myfeed">My Feed</Link>
//         </li>
//         <li className="nav-item">
//           {/* <a className="nav-link" href="/browse">Browse</a> */}
//           <Link to="/browse">Browse</Link>
//         </li>
//         <li className="nav-item">
//           {/* <a className="nav-link" href="/browse">Browse</a> */}
//           <Link to="/search">Search</Link>
//         </li>
//       </ul>
//       <ul className="navbar-nav ml-auto">
//       {/* { userOption } */}
//         <li className="nav-item">
//           <a className="nav-link" href="/myprofile">My Profile</a>
//         </li>
//         </ul>
//   </div>
// </nav>


// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import "./Navbar.css";

import * as routes from "../../routes/routes";

import "./Navbar.css";

import SignOutButton from "../AuthPages/SignOut";

// use authUser object for session handling later
const NavBar = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNoAuth />}</div>
);

const NavigationAuth = () => (
  <nav className="navbar">
  <a className="navbar-brand" href="/">lfg-app</a>


    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        {/* <a className="nav-link" href="/myfeed">My Feed <span class="sr-only">(current)</span></a> */}
        <Link to ="/myfeed" className="nav-link">my feed</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/browse" className="nav-link">browse</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/search" className="nav-link">search</Link>
      </li>
    {/* { userOption } */}
      <li className="nav-item">
        <a className="nav-link" href="/myprofile">profile</a>
      </li>
      {/* CHANGE HERE */}
      <li className="nav-item">
      <SignOutButton className="nav-link button btn" />
      </li>
      {/* CHANGE HERE */}
      </ul>

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
  <nav className="navbar">
  <a className="navbar-brand" href="/">lfg-app</a>


    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/browse" className="nav-link">browse</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/search" className="nav-link">search</Link>
      </li>
    {/* CHANGE HERE */}
    <li className="nav-item">
      <Link to={routes.SIGN_IN} className="button btn">sign in</Link>
    </li>
    {/* CHANGE HERE */}
    </ul>
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

export default NavBar;