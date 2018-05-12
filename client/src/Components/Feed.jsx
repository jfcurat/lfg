import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Feed extends Component {
  formatPostsArray() {
    const { postArrays } = this.props;
    const posts = [].concat.apply([], postArrays);
    const sortedPosts = posts.sort((postA, postB) => {
      return moment(postA.timeCreated).diff(moment(postB.timeCreated))
    }).map(post=> {
      return {
        ...post,
        timeCreated: moment(post.timeCreated).calendar()
      }
    })
    return sortedPosts;
  }

  render() {
    const posts = this.formatPostsArray();
    console.log(posts);
    return (
      <div className='container' style={{ marginTop: 15, marginBottom: 15 }}>
      <div className='card bg-dark' style={{ marginTop: 15, marginBottom: 15 }}>
        <div className='card-body bg-dark'>
          <div>
            {posts.map(post =>
              <div className='card bg-dark' key={post.post} style={{ marginTop: 10, border: "2px solid black" }} >
                <div className='card-header bg-dark' style={{ padding: 5, paddingTop: 10, paddingBottom: 0, borderBottom: "2px solid black" }}>
                  <div className='row'>
                    <div className='col-sm-9 col-md-4'>
                      <span>
                      <Link to={`/user/${post.userId}`}>{post.userName} </Link> posted at {post.timeCreated}
                      </span>
                    </div>
                    <div className='col-sm-9 col-md-3'>
                      <Link to={`/game/${post.gameId}`}>{post.game}</Link>
                    </div>
                    <div className='col-sm-3 col-md-3'>
                      <p><span>Platform: {post.platform}</span></p>
                    </div>
                    <div className='col-sm-3 col-md-2'>
                      <p><span>Players needed: {post.amountOfPlayersNeeded}</span></p>
                    </div>
                  </div>
                </div>
                <div className='card-body bg-secondary' style={{ overflow: "auto" }}>
                  <p>{post.post}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Feed;
