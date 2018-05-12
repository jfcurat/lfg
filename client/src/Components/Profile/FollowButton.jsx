import React from 'react';
import API from '../../utils/API';

class FollowButton extends React.Component {
  follow = async () => {
    await API.addFollower(this.props.user._id, this.props.followingId);
  }

  render() {
    const following = this.props.user.following.includes(this.props.followingId);
    return (
      <div>
        {following ? <button className='btn btn-primary' onClick={this.follow}>Follow</button> : <button className='btn btn-primary'>Following</button>}
      </div>
    )
  }
}

export default FollowButton; 
