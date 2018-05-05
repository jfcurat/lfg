import React, {Component} from 'react';
import { Link } from "react-router-dom";
import API from '../../../utils/API';
import { withRouter } from 'react-router-dom';

class AddGameButton extends Component {
  addGame = async () => {
    try {
      console.log(this.props.game);
      const newGame = await API.saveNewGame(this.props.game);
      console.log(newGame.data);
      this.props.history.push(`/game/${newGame.data._id}`)
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.props.new);
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