import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/auth';

const dotenv = require('dotenv');

dotenv.config();

const router: Express = express();

//router.use(morgan('dev'));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
  // set the CORS policy
  res.header('Access-Control-Allow-Origin', '*');

  // set the CORS headers
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');

  next();
});

router.use('/', routes);

router.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message,
    token: 'test123'
  });
});

const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port: ${PORT}`))