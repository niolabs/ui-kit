/* eslint-disable no-console */

const path = require('path');
const webpack = require('webpack');
const express = require('express');
const compression = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require(path.join(__dirname, process.argv[2]));
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(compression({ level: 9 }))
app.set('x-powered-by', false);
app.set('etag', false);

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info('Listening at http://localhost:3000');
});
