const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 8080;

const config = require('config');

const app = express();

// database configuration
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000} },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000} },
}

// database connection
mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));

// don't show logs in testing mode
if (config.util.getEnv('NODE_ENV') !== 'test') {
  // use morgan to show logs in console
  app.use(morgan('combined')); // combined - shows logs in apache style
}

// application/json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.json({ message: "Server is up and running..." }));

app.listen(port);

console.log(`Listen on port: ${port}`);

module.exports = app;
