import React from "react";
import Modal from "react-bootstrap4-modal";
import { withRouter } from "react-router-dom";

import { auth } from "../../firebase";
import * as routes from "../../routes/routes";
import { SignUpForm } from "./SignUp";

class SignUpModal extends React.Component {
  state = {
    showModal: false
  };

  modalBackdropClicked = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ showModal: true })}
        >
          Sign Up
        </button>
        <Modal
          visible={this.state.showModal}
          dialogClassName="modal-lg"
          onClickBackdrop={this.modalBackdropClicked}
        >
          <div className="container">
            <div className="row">
              <ul className="col">
                <br />
                <br />
                <li>
                  <SignUpForm />
                </li>
                <br />
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.modalBackdropClicked}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
