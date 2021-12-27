'use strict';
var _express = _interopRequireDefault(require('express'));
var _next = _interopRequireDefault(require('next'));
var _mongoose = _interopRequireDefault(require('mongoose'));
var _dotenv = _interopRequireDefault(require('dotenv'));
require('express-async-errors');
var _cookieParser = _interopRequireDefault(require('cookie-parser'));
var _expressRateLimit = _interopRequireDefault(require('express-rate-limit'));
var _path = _interopRequireDefault(require('path'));
var _expressMongoSanitize = _interopRequireDefault(
  require('express-mongo-sanitize')
);
var _xssClean = _interopRequireDefault(require('xss-clean'));
var _compression = _interopRequireDefault(require('compression'));
var _cors = _interopRequireDefault(require('cors'));
var _errorHandler = require('./dist/middleware/error-handler');
var _notFoundError = require('./dist/errors/not-found-error');
var _authRoutes = require('./dist/routes/authRoutes');
var _postRoutes = require('./dist/routes/postRoutes');
var _commentRouter = require('./dist/routes/commentRouter');
var _likesRouter = require('./dist/routes/likesRouter');
var _userRouter = require('./dist/routes/userRouter');
var _topicRouter = require('./dist/routes/topicRouter');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
// import helmet from 'helmet';
const dev = process.env.NODE_ENV !== 'production';
const app = (0, _next.default)({
  dev,
});
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const serverApp = (0, _express.default)();
  process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

  _dotenv.default.config({
    path: _path.default.join(__dirname, './config.env'),
  });

  if (!process.env.DATABASE) {
    throw new Error('DATABASE must be defined');
  }

  if (!process.env.DATABASE_PASSWORD) {
    throw new Error('DATABASE_PASSWORD must be defined');
  }

  const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

  _mongoose.default
    .connect(DB)
    .then(() => console.log('DB connection successful!'));

  //   const port = process.env.PORT || 3000;
  const server = serverApp.listen(3000, () => {
    console.log(`App running on port ${3000}...`);
  });
  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(
      err === null || err === void 0 ? void 0 : err.name,
      err === null || err === void 0 ? void 0 : err.message
    );
    server.close(() => {
      process.exit(1);
    });
  });
  process.on('SIGTERM', () => {
    console.log('O SIGTERM RECEIVED. Shutting down gracefully.');
    server.close(() => {
      console.log('X Process terminated!');
    });
  });
  serverApp.set('trust proxy', true);
  serverApp.use(
    (0, _cors.default)({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  ); //@ts-ignore

  serverApp.options('*', (0, _cors.default)());
  serverApp.use(_express.default.json()); // Set security HTTP headers
  // serverApp.use(helmet());
  // Limit requests from same API

  const limiter = (0, _expressRateLimit.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour.',
  });
  serverApp.use('/api', limiter); // Body parser, reading data from body into req.body

  serverApp.use(
    _express.default.json({
      limit: '10kb',
    })
  );
  serverApp.use(
    _express.default.urlencoded({
      extended: true,
      limit: '10kb',
    })
  );
  serverApp.use((0, _cookieParser.default)()); // Data sanitization against NoSQL query injection

  serverApp.use((0, _expressMongoSanitize.default)()); // Data sanitization against XSS

  serverApp.use((0, _xssClean.default)()); // Compress all responses

  serverApp.use((0, _compression.default)()); // ROUTES

  serverApp.use('/api/auth', _authRoutes.authRouter);
  serverApp.use('/api/posts', _postRoutes.postRouter);
  serverApp.use('/api/upvotes', _likesRouter.likeRouter);
  serverApp.use('/api/comments', _commentRouter.commentRouter);
  serverApp.use('/api/users', _userRouter.userRouter);
  serverApp.use('/api/topics', _topicRouter.topicRouter);
  serverApp.all('*', (req, res) => {
    handle(req, res);
  });
  serverApp.all('*', async (req, _res, next) => {
    return next(new _notFoundError.NotFoundError(req.originalUrl));
  });
  serverApp.use(_errorHandler.errorHandler);
});