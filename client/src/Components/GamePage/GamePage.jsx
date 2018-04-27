import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActionCreators from '../../actions/gameActions.js';

class GamePage extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    const { gameActions } = this.props;
    gameActions.retrieveGame(params.name);
  }

  render() {
    console.log(this.props);
    return (
      <div>Made it</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
