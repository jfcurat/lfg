import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActionCreators from '../../actions/gameActions.js';
import { Container } from 'reactstrap';

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
      <div>
      <Container fluid>
      <div className="container">
      <h1 className="display-3">
      Search a game! </h1>
      </div>
      </Container>
      <div>
      <div className="container">
      <form className='searchForm'>
        <div className='form-group'>
          {/* <label htmlFor='gameNameInput'>Search</label> */}
          <input
            id='gameNameInput'
            className='form-control'
            value={this.state.gameName}
            name='gameName'
            onChange={this.handleInputChange}
            type='text'
            placeholder="ex. Halo, NBA 2K18"
          />
        </div>
        <button type='submit' className="button btn float-right" onClick={this.handleFormSubmit}>Search</button>
      </form>
      </div>
      </div>
  </div>
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
