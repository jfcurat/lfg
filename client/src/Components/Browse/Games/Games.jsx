import React, {Component} from 'react';
import GameInfoModal from './GameInfoModal.jsx';
import './Games.css';
import GameImage from './GameImage';
import AddGameButton from './AddGameButton';
import PostModal from '../PostModal';

import API from '../../../utils/API.js';

class Games extends Component {
  render() {
    if(this.props.games.games) {
      if(this.props.games.games.length === 0) {
        return <p>Sorry we found no games matching that name! Please check the spelling and try again.</p>
      } else {
        const { games } = this.props.games;
        return (
          <div className="container">
            <p>{this.props.games.new ? "Would you like to add one of these?" : this.props.games.length === 1 ? 'We found this game:' : 'We found these games:'}</p>
            <div className='flex-container'>
              {games.map((game, index) => {
                return(
                  <div key={index}>
                    <GameImage src={game.coverPhoto} gameId={game._id ? game._id : false}/>
                    <GameInfoModal gameInfo={game}/>
                    <AddGameButton game={game} new={this.props.games.new}/>
                    <PostModal games={game}/>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }
    } else {
      return (
        <div className="container">
          <p>Search for a game!</p>
        </div>
      )
    }
  }
};

export default Games;
