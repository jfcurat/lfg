import React, {Component} from 'react';


class PostForm extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      this.content.value = '';
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="post-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Write Something:
              <input type="text" ref={(input) => this.content = input} />
            </label>
            <button className="button">Submit</button>
          </form>
        </div>
      )
    }
  }
  
  export default PostForm;