import React from "react";
import { Modal, ModalBody } from "reactstrap";
import SignInForm from "./SignIn";
import SignUpModal from "./SignUpModal";
import "./modalstyle.css";

class SignInModal extends React.Component {
  render() {
    return (
      <div>
        <button
          className="nav-button"
          onClick={this.props.toggleSignIn}
        >{this.props.button.trim()}</button>
        <Modal
          isOpen={this.props.signIn}
          toggle={this.props.toggleSignIn}
        >
          <div className="modal-header">{`sign in`}
          </div>
          <ModalBody>
            <div className="row">
              <ul className="col">

                <SignInForm />
              </ul>
            </div>
          </ModalBody>
          <div className="modal-footer">

            <p>{`Don't have an account yet? `}
              <SignUpModal toggle={this.props.toggleSignUp} signUpModal={this.props.signUp} />
            </p>
          </div>

        </Modal>
      </div>
    );
  }
}

export default SignInModal;