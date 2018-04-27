import React from 'react';
import Modal from 'react-bootstrap4-modal';
import './Games.css';
 
class GameInfoModal extends React.Component {
  state = {
    showModal: false,
  }
 
  modalBackdropClicked = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>    
      <button className='btn btn-primary' onClick={() => this.setState({showModal: true})}>More info!</button>
      <Modal visible={this.state.showModal} dialogClassName='modal-lg' onClickBackdrop={this.modalBackdropClicked}>
        <div>
          <img src={this.props.gameInfo.coverPhoto} className='modal-img' alt=''></img>
          <div className='container'>
            <div className='row'>
            <ul className='col'>
              <p>Genres:</p>
              {this.props.gameInfo.genre.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <ul className='col'>Ratings: <li>{this.props.gameInfo.rating}</li></ul>
            <ul className='col'>ESRB: <li>{this.props.gameInfo.esrb}</li></ul> 
            </div>
            <div className='row'>
            <ul className='col'>
              <p>Game Modes:</p>                            
              {this.props.gameInfo.gameMode.map(gameMode => <li>{gameMode}</li>)}
            </ul>
            <ul className='col'>Initial Realease: <li>{this.props.gameInfo.releaseDate}</li></ul>
            </div>
            <div className='row'>
            <ul className='col'>
              <p>Developers:</p>              
              {this.props.gameInfo.developer.map(developer => <li><a href={developer.url}>{developer.name}</a></li>)}
            </ul>
            <ul className='col'>
              <p>Publishers:</p>              
              {this.props.gameInfo.publisher.map(publisher => <li><a href={publisher.url}>{publisher.name}</a></li>)}
            </ul>

            </div>     
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

export default GameInfoModal;
