import React, { Component } from "react";
import API from "../../utils/API";

import Feed from "../Feed";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../actions/userActions.js";
import { Jumbotron, Container } from "reactstrap";

class MyFeed extends Component {
  state = {
    following: [],
    post: "",
    userName: ""
  };

  refreshFeed = async () => {
    return this.props.userActions.retrieveUser(
      this.props.user.user.fireBaseId
    );
  };

  render() {
    let posts = true;
    const postArrays = this.props.user.user.following.map(followingUser => {
      if (followingUser.posts) {
        return followingUser.posts.map(post => {
          return {
            post: post.post,
            amountOfPlayersNeeded: post.amountOfPlayersNeeded,
            userId: followingUser._id,
            userName: followingUser.userName,
            timeCreated: post.timeCreated,
            platform: post.platform,
            gameId: post.gameId,
            game: post.gameId.name
          };
        });
      } else {
        return (posts = false);
      }
    });

    return (
      <div>
        <Jumbotron fluid>
          <div className="container">
            <h1 className="display-2">My Feed</h1>
          </div>
        </Jumbotron>

        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              {posts ? (
                <Feed refresh={this.refreshFeed} postArrays={postArrays} />
              ) : (
                <p>There are no posts yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFeed);
