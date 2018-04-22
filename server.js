const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');

const gameRouter = require('./routes/gameRouter');
// const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client'));

app.use(gameRouter, userRouter);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  })
})
