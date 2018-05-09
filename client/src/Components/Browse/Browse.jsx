import React, {Component} from 'react';
import Search from './Search.jsx';
import Games from './Games/Games.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActionCreators from '../../actions/gameActions.js';

class Browse extends Component {
  render() {
    const { data } = this.props.games;
    return (
      <div>
        <Search />
        <Games games={data}/>
      </div>
    )  
  }
}

function mapStateToProps(state) {
  return {
    games: state.games.games,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
