import React, { Component } from "react";
import "./UpdateProfile.css";
import Checkbox from './Checkbox';
import API from '../../utils/API.js';


const platformOptions = [
  "PC (Microsoft Windows)",
  "Xbox One",
  "Xbox 360",
  "Playstation 4",
  "Playstation 3"
];

class UpdateProfileForm extends Component {
  state = {
    username: this.props.user.userName,
    profilePhoto: this.props.user.profilePhoto,
    platforms: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(this.state);
    this.setState({
      [name]: value,
    });
  };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.setState({platforms:[...this.selectedCheckboxes]});
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    platformOptions.map(this.createCheckbox)
  )

  handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.props.user.fireBaseId) 
    console.log(this.state.platforms)
    console.log(this.state.username)
    console.log(this.state.profilePhoto);
    await API.updateUserInfo(
      this.props.user.fireBaseId, 
      this.state.platforms, 
      this.state.username,
      this.state.profilePhoto,
    );

    this.setState({
      username: "",
      profilePhoto: '',
      platform: [],
    });
    this.props.close();
  };

  render() {
    return (
      <div>
        <form className="form">
          <span>Username:</span>
          <input
            value={this.state.username ? this.state.username : this.props.user.userName}
            name='username'
            onChange={this.handleInputChange}
            type='text'
          />
          <span>Platforms:</span>
          {this.createCheckboxes()}
          <span>Profile Photo</span>
          <input
            type='text'
            name='profilePhoto'
            value={this.state.profilePhoto ? this.state.profilePhoto : this.props.user.profilePhoto}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateProfileForm;