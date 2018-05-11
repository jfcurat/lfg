import axios from 'axios';
import moment from 'moment';

export default {
  searchGames: async function(name) {
    try {
      const games = await axios.get('/api/games/' + name);
      return games.data;
    } catch(err) {
      return err;
    }
  },

  searchGameById: async function(id) {
    try {
      console.log(id);
      const results = await axios.get('/api/game/' + id);
      return results.data;
    } catch(err) {
      return err;
    }
  },

  saveNewGame: async function(game) {
    try {
      const newGame = await axios.post('/api/games', game);
      return newGame;
    } catch(err) {
      return err;
    }
  },

  newPost: async function(post) {
    try {
      const newPost = await axios.post('/api/post', { timeCreated: moment().format(), ...post });
      console.log(newPost);
    } catch(err) {
      console.log(err);
    }
  },

  getPost: async function(id) {
    try {
      await axios.get('/api/post/' + id);
    } catch (err) {
      console.log(err);
    }
  },

  getUser: async function(id) {
    try {
      console.log(id);
      const user = await axios.get('/api/users/' + id);
      console.log(user);
      return user;
    } catch(err) {
      return err;
    }
  },

  signInUser: async function(fireBaseId) {
    try {
      const user = await axios.get('/api/user/' + fireBaseId);
      console.log(user);
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

  updateUserInfo: async function(fireBaseId, platforms, userName, profilePhoto) {
    try {
      console.log(fireBaseId, platforms, userName, profilePhoto);
      const updatedUser = await axios.patch('/api/users', {fireBaseId, platforms, userName, profilePhoto});
      return updatedUser;
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

  addFollower: async function(userId, addFollowingId) {
    try {
      const updatedUser = await axios.patch('/api/users', {userId, addFollowingId});
      return updatedUser;
    } catch(err) {
      return err;
    }
  },
}
