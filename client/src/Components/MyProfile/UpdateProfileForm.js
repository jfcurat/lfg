import React, { Component } from "react";
import "./UpdateProfile.css";
import Checkbox from "./Checkbox";
import API from "../../utils/API.js";
import "../AuthPages/modalstyle.css";

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
<<<<<<< HEAD
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
=======
    username: this.props.user.userName,
    profilePhoto: this.props.user.profilePhoto,
    platforms: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
>>>>>>> master
    });
  };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
<<<<<<< HEAD
    // this.selectedCheckboxes = [];

  }
=======
  };
>>>>>>> master

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
<<<<<<< HEAD
    // this.setState({platform:[...this.state.platform, this.selectedCheckboxes]});
    this.setState({platform:[...this.selectedCheckboxes]});
    console.log(this.selectedCheckboxes);
    console.log(this.state);
  }
=======
    this.setState({ platforms: [...this.selectedCheckboxes] });
  };
>>>>>>> master

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => platformOptions.map(this.createCheckbox);

<<<<<<< HEAD
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
=======
  handleFormSubmit = async event => {
    event.preventDefault();
    await API.updateUserInfo(
      this.props.user.fireBaseId,
      this.state.platforms,
      this.state.username,
      this.state.profilePhoto
    );

    this.setState({
      username: "",
      profilePhoto: "",
      platform: []
>>>>>>> master
    });
    console.log (this.state)

  };

  render() {
    // Games You Play: incorporate with igdb
    console.log(this.props);
    return (
      <div>
        <form className="form">
<<<<<<< HEAD
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
=======
          <div className="form-group">
            <span>Username:</span>
            <input
              value={
                this.state.username
                  ? this.state.username
                  : this.props.user.userName
              }
              name="username"
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div className="form-group">
            <span>Platforms:</span>
            {this.createCheckboxes()}
          </div>

          <div className="form-group">
            <span>Profile Photo</span>
            <input
              type="text"
              name="profilePhoto"
              value={
                this.state.profilePhoto
                  ? this.state.profilePhoto
                  : this.props.user.profilePhoto
              }
              onChange={this.handleInputChange}
            />
          </div>
          <button className="submit" onClick={this.handleFormSubmit}>
            Submit
          </button>
>>>>>>> master
        </form>
      </div>
    );
  }
}

export default UpdateProfileForm;
