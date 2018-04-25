import React, {Component} from 'react';

const Row = props => {
  if(props.index % 5 === 0) {
    return <div className='row'></div>
  } else {
    return null;
  }
}

export default Row;
