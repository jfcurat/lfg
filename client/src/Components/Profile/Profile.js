import React, { Component } from "react";
// import UpdateProfile from "./UpdateProfile"
// import UpdateProfile from "../MyProfile/UpdateProfile";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions.js';

// import UpdateProfileButton from '../MyProfile/UpdateProfileButton';
import UpdateProfileModal from "../MyProfile/UpdateProfileModal";
import API from '../../utils/API.js';
import placeholder from "../MyProfile/placeholder.jpg";



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
                                <img src={this.state.user.profilePhoto ? this.state.user.profilePhoto : placeholder} alt="Placeholder" float="left" margin-right="15px" width="200px" height="auto" />
                            </div>
                            <div className="col-md-6">
                                <div>I play on:</div>
                                <div>{this.state.user.platforms}</div>
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
