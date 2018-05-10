import React, {Component} from 'react';
import API from '../../../utils/API';
import { withRouter } from 'react-router-dom';

class AddGameButton extends Component {
  addGame = async () => {
    try {
      const newGame = await API.saveNewGame(this.props.game);
      this.props.history.push(`/game/${newGame.data._id}`)
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    if(this.props.new) {
      return (
        <button onClick={this.addGame} className='btn btn-primary'>Add Game</button>
      )
    } else {
      return null;
    }
  }
}

export default withRouter(AddGameButton);
