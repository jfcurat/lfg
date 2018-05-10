import React from 'react';
import { Link } from "react-router-dom";

const GameImage = props => {
  if (props.gameId) {
    return <Link to={`/game/${props.gameId}`}><img src={props.src} alt='game'></img></Link>
  } else {
    return <img src={props.src} alt='game'></img>
  }
}

export default GameImage;
