import React from "react";

import { auth } from "../../firebase";

const SignOutButton = () => (
  <button type="nav-button" onClick={auth.doSignOut}>
    sign out
  </button>
);

export default SignOutButton;
