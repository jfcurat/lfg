import axios from 'axios';
import igdb from 'igdb-api-node';

const client = igdb('bfa41c90d96ea032c2aa526da386d6bf');

export default {
  searchNewGames: async function(name) {
    function precisionRound(number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }
    try {
      const newGames = await axios.get('/api/game/' + name);
      const updatedNewGames = newGames.data.map(game => {
        return {
          name: game.name,
          summary: game.summary,
          genre: game.genres.map(genre => genre.name),
          developer: game.developers.map(developer => ({name: developer.name, url: developer.website})),
          publisher: game.publishers.map(publisher => ({name: publisher.name, url: publisher.website})),
          releaseDate: game.release_dates ? game.release_dates[0].human : null, 
          gameMode: game.game_modes.map(gameMode => gameMode.name),         
          rating: precisionRound(game.rating, 1),
          esrb: game.esrb ? game.esrb.rating : null,
          coverPhoto: `https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.cloudinary_id}.jpg`,
        }
      });
      return {new: true, games: updatedNewGames};
    } catch(err) {
      return err;
    }
  },

  searchSavedGames: async function(name) {
    if(name) {
      try {
        const results = await axios.get('/api/games', {name});
        return results.data;
      } catch(err) {
        return err;
      }
    } else {
      try {
        const results = await axios.get('/api/games')
        return {new: false, games: results.data};
      } catch(err) {
        return err;
      }
    }
  },

  findGame: async function(name) {
    try {
      const result = await axios.get('/api/game', {name})
      return result;
    } catch(err) {
      return err;
    }
  },

  saveNewGame: async function(game) {
    try {
      await axios.post('/api/games', game);
    } catch(err) {
      return err;
    }
  },

  getUser: async function(id) {
    try {
      const user = axios.get('/api/users/' + id);
      return user;
    } catch(err) {
      return err;
    }
  },

  saveNewUser: async function(user) {
    try {
      const saveUser = await axios.post('/api/users', user);
      return saveUser;
    } catch(err) {
      return err;
    }
  }, 

  deleteUser: async function(id) {
    try {
      const saveUser = await axios.delete('/api/users/' + id);
      return saveUser;
    } catch(err) {
      return err;
    }
  }, 

  updateUser: async function(user) {
    try {
      const updatedUser = await axios.patch('/api/users/' + user.id, user);
      return updatedUser;
    } catch(err) {
      return err;
    }
  },
}
