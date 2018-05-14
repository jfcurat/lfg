import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import UpdateProfileForm from "./UpdateProfileForm";
import "./UpdateProfile.css";

class UpdateProfileModal extends React.Component {
  state = {
    showModal: false
  };

  modalBackdropClicked = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
<<<<<<< HEAD
      <div>    
      <button className='btn btn-primary' onClick={() => this.setState({showModal: true})}>Update Profile</button>
      <Modal isOpen={this.state.showModal} toggle={this.modalBackdropClicked}>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalBody>
          <div>
            {console.log(this.props.userInfo)}
            {/* <img src={this.props.} className='modal-img' alt=''></img> */}
            <div className='container'>
              <UpdateProfileForm user={this.props.userInfo}/>
            </div>  
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={this.modalBackdropClicked}>
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
=======
      <div>
        <button
          className="update-button"
          onClick={() => this.setState({ showModal: true })}
        >
          Update Profile
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.modalBackdropClicked}>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalBody>
            <div>
              <div className="container">
                <UpdateProfileForm
                  close={this.modalBackdropClicked}
                  user={this.props.userInfo}
                />
              </div>
            </div>
          </ModalBody>
        </Modal>
>>>>>>> master
      </div>
    );
  }
}

export default UpdateProfileModal;
