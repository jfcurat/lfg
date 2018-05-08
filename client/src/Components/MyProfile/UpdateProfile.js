import React, { Component } from "react";
import "./UpdateProfileForm.css";
import Checkbox from './Checkbox';

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
    username: "",
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

//---------------------------------------------------------------
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
//----------------------------------------------------------------

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username) {
    // if (!this.state.username || this.state.username === ???)   
      alert("Please enter a unique username to use");
    } else if (this.state.platform.length < 1) {
      alert(
        `Please select at least one platform you play on ${this.state.username}!`
      );
    } else {
      alert(`Hello ${this.state.username}`);
    }

    this.setState({
      username: "",
      platform: [],
    });
    console.log (this.state)

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    // Timezone: ?
    // Games You Play: y incorporate with igdb
    return (
      <div>
        <p>
          Hello {this.state.username}
        </p>
        <p>
          I see you play on {[...this.selectedCheckboxes]}
        </p>
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
            />
            <p></p>
          <span>Platforms:
          {this.createCheckboxes()}
          </span>
          <p></p>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateProfileForm;