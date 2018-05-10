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
  // Setting the component's initial state
  state = {
    username: '',
    platform: [],
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      // [name]: value
      username: value
    });
  };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    // this.selectedCheckboxes = [];

  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    // this.setState({platform:[...this.state.platform, this.selectedCheckboxes]});
    this.setState({platform:[...this.selectedCheckboxes]});
    console.log(this.selectedCheckboxes);
    console.log(this.state);
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.username) {
    // if (!this.state.username || this.state.username === ???)   
      alert("Please enter a unique username to use");
    } else if (this.state.platform.length < 1) {
      alert(
        `Please select at least one platform you play on ${this.state.username}!`
      );
    } else {
      console.log(this.state.user);
      const updatedUser = API.updateUserInfo(
        this.state.user.fireBaseId, 
        this.state.user.platforms, 
        this.state.user.userName
      );
      console.log(updatedUser.data);
      this.props.history.push(`/user/${updatedUser.data._id}`);
    }

    this.setState({
      username: "",
      platform: [],
    });
    console.log (this.state)

  };

  render() {
    // Games You Play: incorporate with igdb
    console.log(this.props);
    return (
      <div>
        <form className="form">
          <span>Username:</span>
          <input
            value='nothing'
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <span>Platforms:</span>
          {this.createCheckboxes()}
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateProfileForm;