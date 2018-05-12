import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../../utils/API';
import '../Navbar/Navbar.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      post: '',
      platform: '',
      amountOfPlayersNeeded: '',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showModal: false
    });
  }

  submitPost = async event => {
    event.preventDefault();
    try {
      console.log(this.state);
      console.log(this.props);
      await API.newPost({ post: this.state.post, amountOfPlayersNeeded: this.state.amountOfPlayersNeeded, userId: this.props.userId ? this.props.userId : null, gameId: this.props.games._id, platform: this.state.platform });
      this.setState({ ...this.state, showModal: false, note: '' });
      // this.props.getSaved();
    } catch (err) {
      console.log(err);
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    var buttonStyle = {
      paddingTop: "20px"
    };
    return (
      <div>
        <button className='btn btn-primary' onClick={() => this.setState({ showModal: true })}>Create Post</button>
        <div className="container">
        <button className='btn btn-outline-light' onClick={()=> this.setState({showModal: true})}>Create Post</button>

          <div style={buttonStyle}>
            <Modal isOpen={this.state.showModal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
              <ModalHeader>{this.props.games.name}</ModalHeader>
              <ModalBody>
                <Form style={{ width: '90%', marginLeft: '5%', marginTop: '2%' }}>
                  <FormGroup inline>
                    <Label for="platformSelect">Choose a platform</Label>
                    <Input type="select" name="platform" id="platform" onChange={this.handleInputChange}>
                      <option>All Platforms</option>
                      <option>XBOX</option>
                      <option>PS</option>
                      <option>PC</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="playerNumber">Players needed</Label>
                    <Input onChange={this.handleInputChange} type="number" name="amountOfPlayersNeeded" id="amountOfPlayersNeeded" placeholder="0" min="1" max="15" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="messageText">Notes</Label>
                    <Input onChange={this.handleInputChange} type="textarea" name="post" id="post" placeholder="Lalalala..." />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.submitPost}>Submit</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    userId: state.user.user ? state.user.user._id : null,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);