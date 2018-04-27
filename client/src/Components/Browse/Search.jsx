import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActionCreators from '../../actions/gameActions.js';

class SearchForm extends React.Component {
  state = {
    gameName: '',
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const { gameActions } = this.props;
    const { gameName } = this.state;
    gameActions.retrieveGames(gameName);
  };

  render() {
    return (
      <form className='searchForm'>
        <div className='form-group'>
          <label htmlFor='gameNameInput'>Search</label>
          <input
            id='gameNameInput'
            className='form-control'
            value={this.state.gameName}
            name='gameName'
            onChange={this.handleInputChange}
            type='text'
            placeholder="Search"
          />
        </div>
        <button type='submit' className="btn btn-primary" onClick={this.handleFormSubmit}>Search</button>
      </form>
    )
  }
};

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
