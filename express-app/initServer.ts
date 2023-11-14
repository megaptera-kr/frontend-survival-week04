import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const initServer = () => {
  const app = express();

  const enhanceMiddleware = () => {
    app.use(bodyParser.json());
    app.use(cors());
  };

  enhanceMiddleware();

  app.listen('3001', () => {
    console.log('START');
  });

  return app;
};

export default initServer;
