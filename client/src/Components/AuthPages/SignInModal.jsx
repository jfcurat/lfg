import React from "react";
import {Modal, ModalBody} from "reactstrap";
import SignInForm from "./SignIn";
import SignUpModal from "./SignUpModal";

class SignInModal extends React.Component {
  render() {
    return (
      <div>
        <button
          className="button btn btn-primary"
          onClick={this.props.toggleSignIn}
        >{this.props.button.trim()}</button>
        <Modal
          isOpen={this.props.signIn}
          toggle={this.props.toggleSignIn}
        >
          <ModalBody>
          <div className="container bg-dark">
            <div className="row">
              <ul className="col">
                <br />
                <br />
                <li>
                  <p>{`Enter your email & password to login: `}</p>
                  <SignInForm />
                </li>
                <br />
                <br />
                <li>
                  {/* <SignUpLink /> */}
                  <div>
                    <p>{`Don't have an account yet? `}</p>
                    <SignUpModal toggle={this.props.toggleSignUp} signUpModal={this.props.signUp}/>
                  </div>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props.toggleSignIn}
              >
                Close
              </button>
            </div>
          </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignInModal;
