import express from 'express';
import path from 'path';
import os from 'os';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../webpack.config';

const app = express();

app.get('/api/getUsername', (req, res) => res.send({ user: os.userInfo() }));

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  const HTML_FILE = path.join(compiler.outputPath, 'index.html');

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static('dist'));
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
