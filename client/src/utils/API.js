import axios from "axios";
import moment from "moment";

export default {
  searchGames: async function(name) {
    try {
      const games = await axios.get("/api/games/" + name);
      return games.data;
    } catch (err) {
      throw err;
    }
  },

  searchGameById: async function(id) {
    try {
      const results = await axios.get("/api/game/" + id);
      return results.data;
    } catch (err) {
      throw err;
    }
  },

  saveNewGame: async function(game) {
    try {
      const newGame = await axios.post("/api/games", game);
      return newGame;
    } catch (err) {
      throw err;
    }
  },

  newPost: async function(post) {
    try {
      const newPost = await axios.post("/api/post", {
        timeCreated: moment().format(),
        ...post
      });
    } catch (err) {
      throw err;
    }
  },

  getPost: async function(id) {
    try {
      await axios.get("/api/post/" + id);
    } catch (err) {
      throw err;
    }
  },

  getUser: async function(id) {
    try {
      const user = await axios.get("/api/users/" + id);
      return user.data;
    } catch (err) {
      throw err;
    }
  },

  signInUser: async function(fireBaseId) {
    try {
      const user = await axios.get("/api/user/" + fireBaseId);
      return user;
    } catch (err) {
      throw err;
    }
  },

  saveNewUser: async function(user) {
    try {
      const saveUser = await axios.post("/api/users", user);
      return saveUser;
    } catch (err) {
      throw err;
    }
  },

  updateUserInfo: async function(
    fireBaseId,
    platforms,
    userName,
    profilePhoto
  ) {
    try {
      const updatedUser = await axios.patch("/api/users", {
        fireBaseId,
        platforms,
        userName,
        profilePhoto
      });
      return updatedUser;
    } catch (err) {
      throw err;
    }
  },

  deleteUser: async function(id) {
    try {
      const saveUser = await axios.delete("/api/users/" + id);
      return saveUser;
    } catch (err) {
      throw err;
    }
  },

  addFollower: async function(userId, addFollowingId) {
    try {
      const updatedUser = await axios.patch("/api/users", {
        userId,
        addFollowingId
      });
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }
};
