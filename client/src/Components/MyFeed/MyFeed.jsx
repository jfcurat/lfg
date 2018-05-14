import React, { Component } from "react";
import API from "../../utils/API";

import feed from  "../Feed";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../actions/userActions.js";
import { Jumbotron, Container } from "reactstrap";

class MyFeed extends Component {
<<<<<<< HEAD
    state = {
        following: [],
        post: '',
        userName: ''
    };

    render() {
        const postArrays = this.props.user.following.map(followingUser => {
            return followingUser.posts.map(post => {
                return {
                    post: post.post,
                    amountOfPlayersNeeded: post.amountOfPlayersNeeded,
                    userId: followingUser._id,
                    userName: followingUser.userName,
                    timeCreated: post.timeCreated,
                    platform: post.platform,
                    game: post.game.name,
                  }
            })
          })

        return (
            <div className="card bg-light" style={{ marginTop: 15, marginBottom: 15, backgroundColor: "gray" }}>
                <div className="card-header text-center">
                    <h1>My Feed</h1>
                </div>
            <Feed postArrays={postArrays} />
=======
  state = {
    following: [],
    post: "",
    userName: ""
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
                <Feed postArrays={postArrays} />
              ) : (
                <p>There are no posts yet</p>
              )}
>>>>>>> master
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
