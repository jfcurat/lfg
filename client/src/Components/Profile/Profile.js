import React, { Component } from "react";
<<<<<<< HEAD
// import UpdateProfile from "./UpdateProfile"
// import UpdateProfile from "../MyProfile/UpdateProfile";
=======
import { Link, withRouter } from 'react-router-dom';
import Feed from '../Feed';
>>>>>>> master

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

import UpdateProfileModal from "../MyProfile/UpdateProfileModal";
import API from '../../utils/API.js';
import Follow from './FollowButton';
import placeholder from "../MyProfile/placeholder.jpg";
import './Profile.css';
import { Jumbotron } from 'reactstrap';



class Profile extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    if (params.id) {
      this.getUser(params.id);
    }
    else {
      this.state = { user: this.props.user.user };
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    const { match: { params } } = this.props;
    const prevParams = prevProps.match.params;
    const { match: {path} } = this.props;
    const prevPath = prevProps.match.path;
    
    if (params.id && params.id !== prevParams.id) {
      const user = await API.getUser(params.id);
      this.setState({ user });
    }
    else if(prevPath !== path && path === '/myprofile') {
      this.setState({ user: this.props.user.user });
    }
  }

<<<<<<< HEAD
    render() {
        if(!this.state.user) {
            return null
        }
        // if (!this.props.user) {
        //     return null;
        //   }
        // this.state.user ? null : <UpdateProfileModal />;
        console.log(this.state);
        return (
            <div>
              <div className="container">
            <h1>Welcome to {this.state.user.userName}'s Profile Page</h1>   
                <div className="row">
                    <div className="col-xs-12 col-md-6" margin-left = "10%" border="1px solid #ddd" background="#fff" padding-left= "3%">
                        {/* <h2>{this.state.user.name}</h2> */}
                        <div className="pull-left">
                            <div className="row">
                            <div className="col-md-6">
                                <img src={placeholder} alt="Placeholder" float="left" margin-right="15px" width="200px" height="auto" />
                            </div>
                            <div className="col-md-6">
                                <div>I play on:</div>
                                <div>{this.state.user.platforms}</div>
                                <div>If time permits, display user's registered gamertags</div>
                                {/* Display Gamertags? */}
                                { this.props.user.user ? <UpdateProfileModal style={{color: 'black'}} userInfo={this.props.user.user} /> : null}
                            </div>
                            </div>
                        </div>
                        <p>{this.state.user.bio}</p>
                        {/* <p>{this.state.user.about}</p> */}
                    </div>
        
                    <div className="col-xs-12 col-md-4" border="1px solid #cccccc" max-width="270px" overflow="auto" background-color="#ffffff" float="left" margin-left="9%">
                        <section id="sidebar">
                            <h2>Following</h2>
                            {/* probably have to adjust here for relational stuff */}
                            <div>{this.state.user.following}</div>
                            <h2>Followers</h2>
                            {/* probably have to adjust here for relational stuff */}
                            <div>{this.state.user.following}</div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <h2>Posts:</h2>
                    {/* <div>{this.state.user.posts}</div> */}
=======
  getUser = async (id) => {
    const user = await API.getUser(id);
    this.setState({user});
  }

  render() {
    if (!this.state) {
      return null
    } else if(!this.state.user){
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
        game: post.gameId.name,
      }
    });
    return (
      <div>
        <Jumbotron fluid>
          <div className="container">
            <h1 className="display-2 text-left">{this.state.user.userName}</h1>

            <div className="float-right">
              {this.props.user.user === this.state.user ? <UpdateProfileModal style={{ color: 'black' }} userInfo={this.props.user.user} /> : null}
              {this.props.user.user === this.state.user ? null : this.props.user.user ? <Follow style={{ color: 'black' }} user={this.props.user.user} followingId={this.state.user._id} /> : null}
            </div>
          </div>
        </Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6" margin-left="10%" border="1px solid #ddd" background="#fff" padding-left="3%">
              {/* <h2>{this.state.user.name}</h2> */}
              <div className="pull-left">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={this.state.user.profilePhoto ? this.state.user.profilePhoto : placeholder}
                      alt="Placeholder" float="left" margin-right="15px" width="200px" height="auto" className="profile-photo"
                    />
                  </div>
                  <div className="col-md-8">
                    <div>about me:</div>
                    <p>{this.state.user.bio}</p>
                    <div>I play on:</div>
                    <div>{this.state.user.platforms}</div>
                  </div>
>>>>>>> master
                </div>
              </div>
            </div>

            <div className="followers col-xs-12 col-md-2 pull-right" border="1px solid #cccccc" max-width="270px" overflow="auto" background-color="#ffffff" float="left" margin-left="20%">
              <section id="sidebar">
                <h2 className="display-5">Following</h2>
                <ul>
                  {this.state.user.following.map(followingUser => {
                    return (
                      <Link key={followingUser._id} to={`/user/${followingUser._id}`}>
                        <div >
                          <img src={followingUser.profilePhoto} alt='Profile' className='followersCard'></img>
                          <span>{followingUser.userName}</span>
                        </div>
                      </Link>
                    )
                  })}
                </ul>
                <h2 className="display-5">Followers</h2>
                <ul>
                  {this.state.user.followers.map(followerUser => {
                    return (
                      <Link key={followerUser._id} to={`/user/${followerUser._id}`}>
                        <div >
                          <img src={followerUser.profilePhoto} alt='Profile' className='followersCard'></img>
                          <span>{followerUser.userName}</span>
                        </div>
                      </Link>
                    )
                  })}
                </ul>
              </section>
            </div>
          </div>
          <div className="feed container">
            <div className="row">
              <h1 className="display-5">posts</h1>
              <div class="container">
                <Feed postArrays={posts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
