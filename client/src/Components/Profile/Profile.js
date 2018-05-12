import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Feed from '../Feed';
// import UpdateProfile from "./UpdateProfile"
// import UpdateProfile from "../MyProfile/UpdateProfile";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

// import UpdateProfileButton from '../MyProfile/UpdateProfileButton';
import UpdateProfileModal from "../MyProfile/UpdateProfileModal";
import API from '../../utils/API.js';
import placeholder from "../MyProfile/placeholder.jpg";

import './Profile.css';
import {Jumbotron } from 'reactstrap';


class Profile extends Component {
    state = {

    }
    componentDidMount = async() => {
        const { match: { params } } = this.props;
        if (params.id) {
          const user = await API.getUser(params.id);
          console.log(user.data);
          this.setState({user: user.data});
          console.log(this.state);
        }
        else {
            console.log(this.props);
            this.setState({user: this.props.user.user}) 
            console.log(this.state); 
        }
    };

    render() {
        if(!this.state.user) {
            return null
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
        })
        return (
            <div>
                <Jumbotron fluid>
              <div className="container">
            <h1 className="display-2 text-left">{this.state.user.userName}</h1>  

            <div className="float-right">
            { this.props.user.user ? <UpdateProfileModal style={{color: 'black'}} userInfo={this.props.user.user} /> : null}
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
                                <p>{this.state.user.bio}test</p>
                                <div>I play on:</div>
                                <div>{this.state.user.platforms}</div>
                                
                            </div>
                            </div>
                        </div>

                        {/* <p>{this.state.user.about}</p> */}
                    </div>
        
                    <div className="followers col-xs-12 col-md-2 pull-right" border="1px solid #cccccc" max-width="270px" overflow="auto" background-color="#ffffff" float="left" margin-left="20%">
                        <section id="sidebar">
                            <h2 className="display-5">Following</h2>
                            <ul>
                                {this.state.user.following.map(followingUser => {
                                    return(
                                        <Link to={`/users/${followingUser._id}`} >
                                            <div key={followingUser._id} >
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
                                    return(
                                        <Link to={`/users/${followerUser._id}`}>
                                            <div key={followerUser._id } >
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
                    <Feed postArrays={posts}/>
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
