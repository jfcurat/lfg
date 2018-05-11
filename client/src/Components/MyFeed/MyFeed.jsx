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
        let posts = true;
        console.log(this.props);      
        const postArrays = this.props.user.user.following.map(followingUser => {
            if(followingUser.posts) {
                return followingUser.posts.map(post => {
                    return {
                        post: post.post,
                        amountOfPlayersNeeded: post.amountOfPlayersNeeded,
                        userId: followingUser._id,
                        userName: followingUser.userName,
                        timeCreated: post.timeCreated,
                        platform: post.platform,
                        gameId: post.gameId,
                        game: post.gameId.name,
                    }
                })
            } else {
                return posts = false;
            }
        })
        console.log(postArrays);
        return (
            <div className="card bg-light" style={{ marginTop: 15, marginBottom: 15, backgroundColor: "gray" }}>
                <div className="card-header text-center">
                    <h1>My Feed</h1>
                </div>
                {posts ? <Feed postArrays={postArrays} /> : <p>There are no posts yet</p>}
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

