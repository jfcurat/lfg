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
  DropdownItem
} from 'reactstrap';
import "./Navbar.css";

import * as routes from "../../routes/routes";

import "./Navbar.css";

import SignInModal from "../AuthPages/SignInModal";
import SignOutButton from "../AuthPages/SignOut";

// use authUser object for session handling later
const NavBar = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNoAuth />}</div>
);

const NavigationAuth = () => (
  <Navbar className="navbar navbar-dark">



    <a className="navbar-brand" href="/">
      lfg-app
    </a>

    <ul className="nav nav-pills nav-fill mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/myfeed">feed</Link>
      </li>

      <li className="nav-item">
        <Link to="/search">search</Link>
      </li>

      <li className="nav-item">
        <Link to="/myprofile">profile</Link>
      </li>

    </ul>

  
      <ul className="nav nav-pills nav-fill ml-auto my-2 my-lg-0">
      
      <li className="button my-2 my-lg-0 pull-right">

      <SignOutButton />
  
      </li>
    </ul>

  </Navbar>
);


const NavigationNoAuth = () => (
  <Navbar className="navbar navbar-dark">



    <a className="navbar-brand" href="/">
      lfg-app
    </a>

    <ul className="nav nav-pills nav-fill mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        {/* <a className="nav-link" href="/browse">Browse</a> */}
        <Link to="/search">search</Link>

      </li>

    </ul>

    <ul className="nav nav-pills nav-fill ml-auto my-2 my-lg-0">

      <li className="button my-2 my-lg-0 pull-right">
        {/* <Link to={routes.SIGN_IN}>SignIn</Link> */}
        <SignInModal button='sign in'/>
      </li>
      {/* CHANGE HERE */}
    </ul>
  </Navbar>
);

export default NavBar;
