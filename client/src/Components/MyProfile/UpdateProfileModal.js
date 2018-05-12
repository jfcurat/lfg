import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import UpdateProfileForm from "./UpdateProfileForm";
import './UpdateProfile.css';
 
class UpdateProfileModal extends React.Component {
  state = {
    showModal: false,
  }
 
  modalBackdropClicked = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>    
      <button className='update-button' onClick={() => this.setState({showModal: true})}>Update Profile</button>
      <Modal isOpen={this.state.showModal} toggle={this.modalBackdropClicked}>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalBody>
          <div>
            {/* <img src={this.props.} className='modal-img' alt=''></img> */}
            <div className='container'>
              <UpdateProfileForm close={this.modalBackdropClicked} user={this.props.userInfo}/>
            </div>  
          </div>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

export default UpdateProfileModal;
