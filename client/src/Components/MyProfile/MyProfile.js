// import React, { Component } from "react";
import React from "react";
// import UpdateProfile from "./UpdateProfile"
// import Form from "../Form";
import placeholder from "./placeholder.jpg";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as userActionCreators from '../../actions/userActions.js';


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


const MyProfile = () =>
  <div>
      <h1>My Profile</h1>
      <h2>Keep your profile updated to get the most out of this app!</h2>
    
      <div className="container">
        <div className="row">
            <div className="col-xs-12 col-md-6" margin-left = "10%" border="1px solid #ddd" background="#fff" padding-left= "3%">
                {/* Display UserName Here */}
                <div className="pull-left">
                    <div className="row">
                    <div className="col-md-6">
                        <img src={placeholder} alt="Placeholder" float="left" margin-right="15px" width="200px" height="auto" />
                    </div>
                    <div className="col-md-6">
                        <div>This is just a place holder to see what this would look like. </div>
                        <div>Probably display what platforms the user plays on.</div>
                        <div>If time permits, display user's registered gamertags</div>
                        {/* Playing On: [Platforms] */}
                        {/* Display Gamertags? */}
                        {/* need button to link to update */}
                        <a href="#" className="btn btn-primary btn-med active" role="button" aria-pressed="true">Update Profile</a>
                    </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
                et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                gravida.</p>
            </div>

            <div className="col-xs-12 col-md-4" border="1px solid #cccccc" max-width="270px" overflow="auto" background-color="#ffffff" float="left" margin-left="9%">
                <section id="sidebar">
                    <h2>Following</h2>
                    {/* use flexbox to display users being followed */}
                    
                    <h2>Followers</h2>
                    {/* use flexbox to display follower list */}

                </section>
            </div>
        </div>
        <div className="row">
            <h2>Games:</h2>
            {/* use flexbox to display list of games user follows/plays */}
        </div>
    </div>

  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
// export default MyProfile