const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const gameRouter = require('./routes/gameRouter');
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client/build'));

app.use(gameRouter, userRouter, postRouter);

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI  || 'mongodb://<dbuser>:<dbpassword>@ds139370.mlab.com:39370/heroku_lqg9hjmt');

// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
})
