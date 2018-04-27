import React, {Component} from 'react';
import GameInfoModal from './GameInfoModal.jsx';
import { Link } from "react-router-dom";
import './Games.css';

import API from '../../../utils/API.js';

class Games extends Component {
  addGame = async game => {
    try {
      await API.saveNewGame(game);
      return
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    if(this.props.games.games) {
      if(this.props.games.games.length === 0) {
        return <p>Sorry we found no games matching that name! Please check the spelling and try again.</p>
      } else {
        const { games } = this.props.games;
        return (
          <div>
            <p>{this.props.games.new ? "Would you like to add one of these?" : this.props.games.length === 1 ? 'We found this game:' : 'We found these games:'}</p>
            <div className='flex-container'>
              {games.map((game, index) => {
                return(
                  <div key={index}>
                    <img src={game.coverPhoto} alt=''></img>
                    <GameInfoModal gameInfo={game}/>
                    <Link to={`/games/${game.name}`} onClick={this.addGame(this.game)}>
                      <button className='btn btn-primary'>Add Game</button>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }
    } else {
      return (
        <div>
          <p>Search for a game!</p>
        </div>
      )
    }
  }
};

export default Games;
