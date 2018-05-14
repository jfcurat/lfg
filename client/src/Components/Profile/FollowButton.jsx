import React from "react";
import API from "../../utils/API";

class FollowButton extends React.Component {
  state = {};
  follow = async () => {
    await API.addFollower(this.props.user._id, this.props.followingId);
    this.setState({ loaded: true, following: true });
  };

  async componentDidMount() {
    const user = await API.getUser(this.props.followingId);
    const following = this.props.user.followers.includes(user);
    this.setState({ loaded: true, following });
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }
    return (
      <div>
        {this.state.following ? (
          <button className="btn btn-primary">Following</button>
        ) : (
          <button className="btn btn-primary" onClick={this.follow}>
            Follow
          </button>
        )}
      </div>
    );
  }
}

export default FollowButton;
