import React, { Component } from "react";
import Feed from "../Feed";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gameActionCreators from "../../actions/gameActions.js";
import PostModal from "../Browse/PostModal";
import API from "../../utils/API";
import SignInModal from "../AuthPages/SignInModal";

class GamePage extends Component {
  state = {};

  componentDidMount = async () => {
    this.refreshFeed();
  };

  refreshFeed = async () => {
    const {
      match: { params }
    } = this.props;
    const game = await API.searchGameById(params.id);
    this.setState({ game });
  };

  render() {
    if (!this.state.game) {
      return null;
    }
    const postArrays = this.state.game.posts.map(post => {
      return {
        post: post.post,
        amountOfPlayersNeeded: post.amountOfPlayersNeeded,
        userId: post.userId._id,
        userName: post.userId.userName,
        timeCreated: post.timeCreated,
        platform: post.platform,
        game: this.state.game.name,
        gameId: this.state.game._id
      };
    });
    return (
      <div>
        <div className="jumbotron">
          <h1 className="" style={{ width: "75%", display: "inline-block" }}>
            {this.state.game.name}
          </h1>
          <span className="" style={{ width: "75%", float: "left" }}>
            {this.state.game.summary}
          </span>
          <img
            style={{ height: "300px", width: "auto" }}
            src={this.state.game.coverPhoto}
            alt="game"
          />
          <hr className="my-4" />
          <PostModal games={this.state.game} />
        </div>
        <Feed refresh={this.refreshFeed} postArrays={postArrays} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.games.currentGame,
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
