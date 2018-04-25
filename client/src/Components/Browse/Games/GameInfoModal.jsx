import React from 'react';
import Modal from 'react-bootstrap4-modal';
 
class GameInfoModal extends React.Component {
  state = {
    showModal: false,
    gameInfo: {},
  }
 
  modalBackdropClicked = () => {
    this.setState({showModal: false});
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({gameInfo: this.props.gameInfo});
  }

  render() {
    return (
      <div>
    {console.log(this.props) }        
      <button style={{float: 'left', marginRight: 5}} className='btn btn-primary' onClick={() => this.setState({showModal: true})}>More info!</button>
      <Modal visible={this.state.showModal} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Add a note!</h5>
        </div>
        <div className='container'>
          <img src={this.props.gameInfo.coverPhoto} alt=''></img>
          <p>{this.props.gameInfo.name}</p>
          <ul>
            {this.props.gameInfo.genre.map(genre => <li>{genre}</li>)}
          </ul>
          <ul>
            {this.props.gameInfo.developer.map(developer => <a href={developer.url}><li>{developer.name}</li></a>)}
          </ul>
          <ul>
            {this.props.gameInfo.publisher.map(publisher => <a href={publisher.url}><li>{publisher.name}</li></a>)}
          </ul>
          <ul>
            {this.props.gameInfo.gameMode.map(gameMode => <li>{gameMode}</li>)}
          </ul>
          <p>Initial Realease: {this.props.gameInfo.releaseDate}</p>
          <p>Ratings: {this.props.gameInfo.rating}</p>
          <p>ESRB: {this.props.gameInfo.esrb}</p>        
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

export default GameInfoModal;
