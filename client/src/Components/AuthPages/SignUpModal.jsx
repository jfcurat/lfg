import React from "react";

class SignUpModal extends React.Component {
  render() {
    return (
      <a onClick={this.props.toggle}>
        <u>Sign Up!</u>
      </a>
    );
  }
}

export default SignUpModal;
