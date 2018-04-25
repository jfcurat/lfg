import React from 'react';
import GameInfoModal from './GameInfoModal.jsx';

const Games = props => {
  if(props.games.games.length === 0) {
    return <p>Sorry we found no games matching that name! Please check the spelling and try again.</p>
  } else {
    const games = props.games.games;
    const gameRows = [];
    for(let i = 0; i < games.length / 5 + 1; i++) {
      console.log(games);
      gameRows.push(games.splice(0, 5));
    }
    console.log(gameRows);
      
    return (
      <div>
        <p>{props.games.new ? "Would you like to add one of these?" : props.games.length === 1 ? 'We found this game:' : 'We found these games:'}</p>
        <div className='container'>
          {gameRows.map(row => {
            return (
              <div className='row'>
                {row.map((game, index) => {
                  return(
                    <div key={index} className='col'>
                      <img src={game.coverPhoto} alt=''></img>
                      <p>{game.name}</p>
                      <GameInfoModal gameInfo={game}/>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Games;
