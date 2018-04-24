import axios from 'axios';
import igdb from 'igdb-api-node';

const client = igdb('bfa41c90d96ea032c2aa526da386d6bf');

export default {
  searchNewGames: async function(name) {
    const results = await client.games({
      filters: {
        'popularity-gt': '5',
      },
      fields: '*',
      search: name,
    })
    return results;
  },

  searchSavedGames: async function(name) {
    if(name) {
      try {
        const results = await axios.get('/api/games', {name});
        return results;
      } catch(err) {
        console.log(err);
      }
    } else {
      try {
        const results = await axios.get('/api/games')
        return results;
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
