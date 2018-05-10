import React, { Component } from "react";
// import React from "react";
// import UpdateProfile from "./UpdateProfile"
// import Form from "../Form";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';
// import UpdateProfileButton from './UpdateProfileButton';
import API from '../../utils/API.js';
import UpdateProfileModal from "./UpdateProfileModal";
import placeholder from "./placeholder.jpg";

class MyProfile2 extends Component {
    state = {

    }
    async componentDidMount() {
        const { match: { params } } = this.props;
        const { userActions } = this.props;
        console.log(this);
        if (params.id) {
            const user = await API.getUser(params.id);
            this.setState({user: user.data});
        }
        else {
            // const user = await API.getUser(this.props.user.id)
            console.log(this.props.user);
            this.setState({user:this.props.user}) 
        }
    };

    render() {
        console.log(this.state)
        if(!this.state.user) {
            return null
        }
        if (!this.props.user) {
            return null;
          }
        // this.state.user ? null : <UpdateProfileModal />;
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
                                <UpdateProfileModal userInfo={this.props.user} />
                                {/* {UpdateProfileButton} */}
                            </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                        aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
                        et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                        gravida.</p>
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
                    <div>{this.state.user.posts}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile2);
