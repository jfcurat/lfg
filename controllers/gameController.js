const db = require("../models");
const igdb = require("igdb-api-node").default;
const client = igdb("9a947a305a14a01cbe00b6e3e679f06e");

async function get(req, res) {
  try {
    const games = await db.Game.find({ name: req.params.name });
    if (games.length === 0) {
      function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }
      const results = await client.games({
        search: req.params.name,
        filters: { "popularity-gt": "5" },
        fields: [
          "name",
          "summary",
          "genres",
          "developers",
          "publishers",
          "release_dates",
          "game_modes",
          "rating",
          "esrb",
          "cover"
        ],
        expand: ["developers", "publishers", "game_modes", "genres"]
      });
      const newGames = results.body.map(game => {
        return {
          name: game.name,
          summary: game.summary,
          genres: game.genres.map(genre => genre.name),
          developers: game.developers.map(developer => ({
            name: developer.name,
            url: developer.website
          })),
          publishers: game.publishers.map(publisher => ({
            name: publisher.name,
            url: publisher.website
          })),
          releaseDate: game.release_dates ? game.release_dates[0].human : null,
          gameModes: game.game_modes.map(gameMode => gameMode.name),
          rating: precisionRound(game.rating, 1),
          esrb: game.esrb ? game.esrb.rating : null,
          coverPhoto: `https://images.igdb.com/igdb/image/upload/t_720p/${
            game.cover.cloudinary_id
          }.jpg`
        };
      });
      res.status(200).json({ new: true, games: newGames });
    }
    res.status(200).json({ new: false, games });
  } catch (err) {
    throw err;
  }
}

async function getOne(req, res) {
  try {
    const game = await db.Game.findOne({ _id: req.params.id }).populate({
      path: "posts",
      model: "Post",
      populate: {
        path: "userId",
        model: "User"
      }
    });
    res.status(200).json(game);
  } catch (err) {
    throw err;
  }
}

async function post(req, res) {
  const {
    name,
    summary,
    genres,
    developers,
    publishers,
    releaseDate,
    gameModes,
    rating,
    esrb,
    coverPhoto
  } = req.body;
  try {
    const game = await db.Game.create({
      name,
      summary,
      genres,
      developers,
      publishers,
      releaseDate,
      gameModes,
      rating,
      esrb,
      coverPhoto
    });
    res.status(200).json(game);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  get,
  getOne,
  post
};
