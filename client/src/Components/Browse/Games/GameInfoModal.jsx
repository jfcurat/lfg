import React from "react";
import Modal from "react-bootstrap4-modal";
import "./Games.css";

class GameInfoModal extends React.Component {
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
          className="btn btn-outline-light gamesButton"
          onClick={() => this.setState({ showModal: true })}
        >
          More Info!
        </button>
        <Modal
          visible={this.state.showModal}
          dialogClassName="modal-lg"
          onClickBackdrop={this.modalBackdropClicked}
        >
          <div className="gameInfo">
            <img
              src={this.props.gameInfo.coverPhoto}
              style={{ height: 'auto' }}
              className="modal-img pull-right"
              alt=""
            />
            <div className="container">
              <div className="row">
                <ul className="col">
                  <p>Genres:</p>
                  {this.props.gameInfo.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
                <ul className="col">
                  Ratings: <li>{this.props.gameInfo.rating}</li>
                </ul>
                <ul className="col">
                  ESRB: <li>{this.props.gameInfo.esrb}</li>
                </ul>
              </div>
              <div className="row">
                <ul className="col">
                  <p>Game Modes:</p>
                  {this.props.gameInfo.gameModes.map(gameMode => (
                    <li>{gameMode}</li>
                  ))}
                </ul>
                <ul className="col">
                  Initial Release: <li>{this.props.gameInfo.releaseDate}</li>
                </ul>
              </div>
              <div className="row">
                <ul className="col">
                  <p>Developers:</p>
                  {this.props.gameInfo.developers.map(developer => (
                    <li>
                      <a href={developer.url}>{developer.name}</a>
                    </li>
                  ))}
                </ul>
                <ul className="col">
                  <p>Publishers:</p>
                  {this.props.gameInfo.publishers.map(publisher => (
                    <li>
                      <a href={publisher.url}>{publisher.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GameInfoModal;
