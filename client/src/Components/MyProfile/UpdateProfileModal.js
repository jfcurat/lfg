import React from 'react';
import Modal from 'react-bootstrap4-modal';
import UpdateProfileForm from "./UpdateProfileForm";
 
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
      <button className='btn btn-primary' onClick={() => this.setState({showModal: true})}>Update Profile</button>
      <Modal visible={this.state.showModal} dialogClassName='modal-lg' onClickBackdrop={this.modalBackdropClicked}>
        <div>
          {console.log(this.props.userInfo)}
          {/* <img src={this.props.} className='modal-img' alt=''></img> */}
          <div className='container'>
            <UpdateProfileForm />
          </div>  
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={this.modalBackdropClicked}>
            Close
          </button>
        </div>
      </Modal>
      </div>
    );
  }
}

export default UpdateProfileModal;
