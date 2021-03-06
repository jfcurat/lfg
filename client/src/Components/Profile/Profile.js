import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Feed from "../Feed";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../actions/userActions.js";

import UpdateProfileModal from "../MyProfile/UpdateProfileModal";
import API from "../../utils/API.js";
import Follow from "./FollowButton";
import placeholder from "../MyProfile/placeholder.jpg";
import "./Profile.css";
import { Jumbotron } from "reactstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;
    if (params.id) {
      this.getUser(params.id);
    } else {
      this.state = { user: this.props.user.user };
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const {
      match: { params }
    } = this.props;
    const prevParams = prevProps.match.params;
    const {
      match: { path }
    } = this.props;
    const prevPath = prevProps.match.path;

    if (params.id && params.id !== prevParams.id) {
      const user = await API.getUser(params.id);
      this.setState({ user });
    } else if (prevPath !== path && path === "/myprofile") {
      this.setState({ user: this.props.user.user });
    }
  }

  getUser = async id => {
    const user = await API.getUser(id);
    this.setState({ user });
  };

  refreshFeed = async () => {
    return this.props.userActions.retrieveUser(this.props.user.user.fireBaseId);
  };

  render() {
    if (!this.state) {
      return null;
    } else if (!this.state.user) {
      return null;
    }
    const posts = this.state.user.posts.map(post => {
      return {
        post: post.post,
        amountOfPlayersNeeded: post.amountOfPlayersNeeded,
        userId: this.state.user._id,
        userName: this.state.user.userName,
        timeCreated: post.timeCreated,
        platform: post.platform,
        gameId: post.gameId._id,
        game: post.gameId.name
      };
    });
    return (
      <div>
        <Jumbotron fluid>
          <div className="container">
            <h1 className="display-2 text-left">{this.state.user.userName}</h1>

            <div className="float-right">
              {this.props.user.user === this.state.user ? (
                <UpdateProfileModal
                  style={{ color: "black" }}
                  userInfo={this.props.user.user}
                />
              ) : null}
              {this.props.user.user === this.state.user ? null : this.props.user
                .user ? (
                <Follow
                  style={{ color: "black" }}
                  user={this.props.user.user}
                  followingId={this.state.user._id}
                />
              ) : null}
            </div>
          </div>
        </Jumbotron>
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-md-6"
              margin-left="10%"
              border="1px solid #ddd"
              background="#fff"
              padding-left="3%"
            >
              {/* <h2>{this.state.user.name}</h2> */}
              <div className="pull-left">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={
                        this.state.user.profilePhoto
                          ? this.state.user.profilePhoto
                          : placeholder
                      }
                      alt="Placeholder"
                      float="left"
                      margin-right="15px"
                      width="200px"
                      height="auto"
                      className="profile-photo"
                    />
                  </div>
                  <div className="col-md-8">
                    <div>about me:</div>
                    <p>{this.state.user.bio}</p>
                    <div>I play on:</div>
                    <div>{this.state.user.platforms}</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="followers col-xs-12 col-md-2 pull-right"
              border="1px solid #cccccc"
              max-width="270px"
              overflow="auto"
              background-color="#ffffff"
              float="left"
              margin-left="20%"
            >
              <section id="sidebar">
                <h2 className="display-5">Following</h2>
                <ul>
                  {this.state.user.following.map(followingUser => {
                    return (
                      <Link
                        key={followingUser._id}
                        to={`/user/${followingUser._id}`}
                      >
                        <div>
                          <img
                            src={followingUser.profilePhoto}
                            alt="Profile"
                            className="followersCard"
                          />
                          <span>{followingUser.userName}</span>
                        </div>
                      </Link>
                    );
                  })}
                </ul>
                <h2 className="display-5">Followers</h2>
                <ul>
                  {this.state.user.followers.map(followerUser => {
                    return (
                      <Link
                        key={followerUser._id}
                        to={`/user/${followerUser._id}`}
                      >
                        <div>
                          <img
                            src={followerUser.profilePhoto}
                            alt="Profile"
                            className="followersCard"
                          />
                          <span>{followerUser.userName}</span>
                        </div>
                      </Link>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
          <div className="feed container">
            <div className="row">
              <h1 className="display-5">posts</h1>
              <div class="container">
                <Feed refresh={this.refreshFeed} postArrays={posts} />
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
