import React from 'react';

class SearchForm extends React.Component {
  state = {
    gameName: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const gameName = this.state.gameName;
    this.props.setGames(gameName);

    this.setState({
      gameName: '',
    })
  };

  render() {
    return (
      <form className='searchForm'>
        <div className='form-group'>
          <label htmlFor='gameNameInput'>Search</label>
          <input
            id='gameNameInput'
            className='form-control'
            value={this.state.gameName}
            name='gameName'
            onChange={this.handleInputChange}
            type='text'
            placeholder="Search"
          />
        </div>
        <button type='submit' className="btn btn-primary" onClick={this.handleFormSubmit}>Search</button>
      </form>
    )
  }
};

export default SearchForm;