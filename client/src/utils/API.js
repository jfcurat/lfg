import axios from 'axios';
import igdb from 'igdb-api-node';

const client = igdb('bfa41c90d96ea032c2aa526da386d6bf');

export default {
  searchNewGames: async function(name) {
    try {
      const newGames = await axios.get('/api/game/' + name);
      const updatedNewGames = newGames.data.map(game => {
        return {
          name: game.name,
          summary: game.summary,
          genre: game.genres.map(genre => genre.name),
          developer: game.developers.map(developer => ({name: developer.name, url: developer.url})),
          publisher: game.publishers.map(publisher => ({name: publisher.name, url: publisher.url})),
          releaseDate: game.release_dates ? game.release_dates[0].human : null, 
          gameMode: game.game_modes.map(gameMode => gameMode.name),         
          rating: game.rating,
          esrb: game.esrb ? game.esrb.rating : null,
          coverPhoto: game.cover.url,
        }
      });
      return updatedNewGames;
    } catch(err) {
      console.log(err);
    }
  },

  searchSavedGames: async function(name) {
    if(name) {
      try {
        const results = await axios.get('/api/games', {name});
        return results.data;
      } catch(err) {
        console.log(err);
      }
    } else {
      try {
        const results = await axios.get('/api/games')
        return results.data;
      } catch(err) {
        console.log(err);
      }
    }
  },

  saveNewGame: async function(game) {
    try {
      const saveGame = await axios.post('/api/games', game);
      return saveGame;
    } catch(err) {
      console.log(err);
    }
  },

  getUser: async function(id) {
    try {
      const user = axios.get('/api/users/' + id);
      return user;
    } catch(err) {
      console.log(err);
    }
  },

  saveNewUser: async function(user) {
    try {
      const saveUser = await axios.post('/api/users', user);
      return saveUser;
    } catch(err) {
      console.log(err);
    }
  }, 

  deleteUser: async function(id) {
    try {
      const saveUser = await axios.delete('/api/users/' + id);
      return saveUser;
    } catch(err) {
      console.log(err);
    }
  }, 

  updateUser: async function(user) {
    try {
      const updatedUser = await axios.patch('/api/users/' + user.id, user);
      return updatedUser;
    } catch(err) {
      console.log(err);
    }
  },
}
