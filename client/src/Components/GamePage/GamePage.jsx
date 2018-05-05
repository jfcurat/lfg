import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActionCreators from '../../actions/gameActions.js';

class GamePage extends Component {
  componentDidMount = async() => {
    const { match: { params } } = this.props;
    const { gameActions } = this.props;
    await gameActions.retrieveGame(params.id);
    console.log(this.props.game);
  }

  render() {
    if (!this.props.game) {
      return null;
    }
    console.log(this.props);
    return (
      <div class="jumbotron">
        <h1 class="" style={{width: '75%', display: 'inline-block'}}>{this.props.game.name}</h1>
        <span class="" style={{width: '75%', float: 'left'}}>{this.props.game.summary}</span>
        <img style={{height: '300px', width: 'auto'}} src={this.props.game.coverPhoto}></img>
        <hr class="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Create Post</a>
      </div>
      //access to posts using this.props.game.posts
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.games.game,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
