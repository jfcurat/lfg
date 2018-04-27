import React, { Component } from 'react';
import Browse from './Components/Browse/Browse.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import NoMatch from './Components/NoMatch.jsx';
import GamePage from './Components/GamePage/GamePage.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            {/* <Route exact path='/' component={Browse} /> */}
            <Route exact path='/search' component={Browse} /> 
            <Route exact path='/games/:name' component={GamePage} />             
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
