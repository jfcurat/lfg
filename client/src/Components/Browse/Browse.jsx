import React, {Component} from 'react';
import Search from './Search.jsx';
import API from '../../utils/API.js';
import Games from './Games/Games.jsx';
import axios from 'axios';
// import Nav from '../Nav/Nav.js';

class Browse extends Component {
  state = {
    games: {
      new: false,
      games: [],
    },
  }

  setGames = async gameName => {
    const games = await API.searchSavedGames(gameName);
    if (games.length < 1) {
      const newGames = API.searchNewGames(gameName)
      this.setState({games: {new: true, games: newGames}});
    } else {
      this.setState({games: {new: false, games}});
    }
  }

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <div className='container'>
          <Search setGames={this.setGames}/>
          <Games games={this.state.games}/>
        </div>
      </div>
    )  
  }
}

export default Browse;
