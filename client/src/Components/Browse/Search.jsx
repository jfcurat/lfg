import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActionCreators from '../../actions/gameActions.js';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Search.css';

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
      <Jumbotron fluid>
      <Container fluid>
      <div className="container">
      <h1 className="display-2 text-left">
      browse games </h1>
      </div>
      </Container>
      <div className="container"> 
      <div className="row">
      <form className='searchForm col-lg-8'>
          <div class="cursor">
          <input
            id='gameNameInput'
            className='form-control'
            value={this.state.gameName}
            name='gameName'
            onChange={this.handleInputChange}
            type='text'
            placeholder="ex. Halo, NBA 2K18"
          /><i></i>
                    </div>
          </form>
          <button className="searchForm" type='submit'><i class="fas fa-search text-black"></i></button>

      </div>
      </div>

  </Jumbotron>
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
