import React from "react";
import {Jumbotron} from "reactstrap";

const NoMatch = () => {
  return (
  <Jumbotron fluid>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='container' style={{textAlign: 'center'}}>
            <h1 className="display-3">404 Page Not Found</h1>
            <hr />
            <h1 className="display-1">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Jumbotron>
  )
}

export default NoMatch;
