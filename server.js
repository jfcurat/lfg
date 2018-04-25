const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const axios = require('axios');

const  igdb = require('igdb-api-node').default;
const client = igdb('bfa41c90d96ea032c2aa526da386d6bf');

const gameRouter = require('./routes/gameRouter');
// const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client/build'));

// app.get('/api/game', async (req, res) => {
//   try {
//     const name = 'Call of Duty WW2';
//     const results = await client.games({
//       filters: {
//         'popularity-gt': '5',
//       },
//       fields: '*',
//       search: name,
//     })
//     res.json(results);
//   } catch(err) {
//     console.log(err);
//   } 
// })

app.get('/api/game/:game', async (req, res) => {
  try {
    const name = req.params.game;
    const results = await client.games({search: name, filters: {'popularity-gt': '5'},  fields: '*', expand: ['developers', 'game_modes', 'genres']});   
    res.json(results.body);
  } catch(err) {
    console.log(err);
  } 
})

app.use(gameRouter, userRouter);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  })
})
