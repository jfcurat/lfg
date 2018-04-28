import React from 'react';
import React, {Component} from 'react';
import "./Feed";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        }
    
        this.handleNewPost = this.handleNewPost.bind(this);
      }
    
      handleNewPost(post) {
        this.setState({
          posts: this.state.posts.concat([post])
        });
      }
    
      render() {
        const posts = this.state.posts.map((post, index) =>
          <Post key={index} value={post} />
        );
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="feed">
                  {posts}
                  <PostForm onSubmit={this.handleNewPost} />
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
    
export default Feed;