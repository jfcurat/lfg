import React from "react";

class SignUpModal extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={this.props.toggle}
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUpModal;
