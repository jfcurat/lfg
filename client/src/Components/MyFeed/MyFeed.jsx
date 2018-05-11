import React, { Component } from 'react';
import API from "../../utils/API";

import Feed from "../Feed";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

class MyFeed extends Component {
    state = {
        following: [],
        post: '',
        userName: ''
    };
    render() {
        console.log(this.props);        
        const postArrays = this.props.user.user.following.map(followingUser => {
            return followingUser.posts.map(post => {
                return {
                    post: post.post,
                    amountOfPlayersNeeded: post.amountOfPlayersNeeded,
                    userId: followingUser._id,
                    userName: followingUser.userName,
                    timeCreated: post.timeCreated,
                    platform: post.platform,
                    gameId: post.gameId,
                    // game: post.game.name,
                }
            })
        })
        console.log(postArrays);
        return (
            <div className="card bg-light" style={{ marginTop: 15, marginBottom: 15, backgroundColor: "gray" }}>
                <div className="card-header text-center">
                    <h1>My Feed</h1>
                </div>
                <Feed postArrays={postArrays} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyFeed);

