import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      gameId: this.props.id, 
      userId: this.props.user._id,
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


  saveNote = async () => {
    try {
      await axios.post('/api/post'), {
        post: this.props.post, playerNumber: this.state.note};
        this.setState({showModal: false, note: ''});
        this.props.getSaved();
      } catch(err) {
        console.log(err);
      }
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
      <div className="container">
      <div style={buttonStyle}> 
        <Button color="danger" onClick={this.toggle}>Add Game</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>new lfg</ModalHeader>
          <ModalBody>
            <Form style={{width: '90%', marginLeft: '5%', marginTop: '2%'}}>
              <FormGroup inline>
                <Label for="platformSelect">Choose a platform</Label>
                <Input type="select" name="select" id="platform" onChange={this.handleInputChange} inline>
                  <option>All Platforms</option>
                  <option>XBOX</option>
                  <option>PS</option>
                  <option>PC</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="playerNumber">Players needed</Label>
                <Input type="number" name="number" id="amountOfPlayersNeeded" placeholder="0" min="1" max="15" />
              </FormGroup>
              <FormGroup>
                <Label for="messageText">Notes</Label>
                <Input type="textarea" name="text" id="post" placeholder="Lalalala..." />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveNote}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
      </div>
    );
  }
}

export default AddModal;