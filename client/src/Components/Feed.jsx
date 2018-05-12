import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Feed extends Component {
  formatPostsArray() {
    const { postArrays } = this.props;
    const posts = [].concat.apply([], postArrays);
    const sortedPosts = posts.sort((postA, postB) => {
      return moment(postA.timeCreated).diff(moment(postB.timeCreated))
    })
    return sortedPosts;
  }

  render() {
    const posts = this.formatPostsArray();
    console.log(posts);
    return (
      <div className='card bg-dark' style={{ marginTop: 15, marginBottom: 15 }}>
        <div className='card-body bg-dark'>
          <div>
            {posts.map(post =>
              <div className='card bg-dark' key={post.post} style={{ marginTop: 20 }} >
                <div className='card-header bg-dark'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <Link to={`/user/${post.userId}`}>{post.userName}</Link>
                    </div>
                    <div className='col-sm-9'>
                      <Link to={`/game/${post.gameId}`}>{post.game}</Link>
                    </div>
                    <div className='col-sm-3'>
                      <p>Platform: </p>
                      <p>{post.platform}</p>
                    </div>
                    <div className='col-sm-3'>
                      <p>Players needed: </p>
                      <p>{post.amountOfPlayersNeeded}</p>
                    </div>
                  </div>
                </div>
                <div className='card-body bg-dark'>
                  <p>{post.post}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;
