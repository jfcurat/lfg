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
  state = {
    username: this.props.user.userName,
    profilePhoto: this.props.user.profilePhoto,
    platforms: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.setState({ platforms: [...this.selectedCheckboxes] });
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => platformOptions.map(this.createCheckbox);

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
    });
    this.props.close();
  };

  render() {
    return (
      <div>
        <form className="form">
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
        </form>
      </div>
    );
  }
}

export default UpdateProfileForm;
