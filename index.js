'use strict';
var _express = _interopRequireDefault(require('express'));
var _next = _interopRequireDefault(require('next'));
var _mongoose = _interopRequireDefault(require('mongoose'));
var http_1 = _interopRequireDefault(require('http'));
var socket_io_1 = _interopRequireDefault(require('socket.io'));
var _dotenv = _interopRequireDefault(require('dotenv'));
require('express-async-errors');
var _cookieParser = _interopRequireDefault(require('cookie-parser'));
var _expressRateLimit = _interopRequireDefault(require('express-rate-limit'));
var _path = _interopRequireDefault(require('path'));
var _helmet = _interopRequireDefault(require('helmet'));
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
const dev = process.env.NODE_ENV !== 'production';
const app = (0, _next.default)({
  dev,
});
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const expressApp = (0, _express.default)();
  const httpServer = (0, http_1.createServer)(expressApp);
  httpServer.set('trust proxy', true);
  httpServer.use((0, _cors.default)({ credentials: true, origin: true }));
  httpServer.options('*', (0, _cors.default)());
  httpServer.use(_express.default.json());
  httpServer.use((0, _helmet.default)());
  httpServer.use(
    _helmet.default.contentSecurityPolicy({
      directives: {
        'default-src': ["'self'"],
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': [
          "'self'",
          'data:',
          'http://res.cloudinary.com',
          'https://res.cloudinary.com',
        ],
        'script-src': ["'self'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'connect-src': [
          "'self'",
          'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
        ],
      },
    })
  );
  const limiter = (0, _expressRateLimit.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour.',
  });
  httpServer.use('/api', limiter);
  httpServer.use(
    _express.default.json({
      limit: '10kb',
    })
  );
  httpServer.use(
    _express.default.urlencoded({
      extended: true,
      limit: '10kb',
    })
  );
  httpServer.use((0, _cookieParser.default)());
  httpServer.use((0, _expressMongoSanitize.default)());
  httpServer.use((0, _xssClean.default)());
  httpServer.use((0, _compression.default)());
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
  const io = new socket_io_1.Server(httpServer, {
    cors: {
      origin: 'https://storytell.onrender.com/',
    },
  });
  const port = process.env.PORT || 3000;
  const server = httpServer.listen(port, () => {
    console.log(`App running on port ${port}...`);
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
  let onlineUsers = [];
  const addNewUser = (userID, socketID, opponent) => {
    !onlineUsers.some((user) => user.userID === userID) &&
      onlineUsers.push({ userID, socketID, opponent });
  };
  const removeUser = (socketID) => {
    onlineUsers = onlineUsers.filter((user) => user.socketID !== socketID);
  };
  const getUser = (userID) => {
    return onlineUsers.find((user) => user.userID === userID);
  };
  io.on('connection', (socket) => {
    socket.on('connect-user', (userID, opponent) => {
      addNewUser(userID, socket.id, opponent);
    });
    socket.on('send-message', ({ senderID, receiverID, text }) => {
      const receiver = getUser(receiverID);
      io.to(socket.id).emit('receive-message', {
        senderID,
        receiverID,
        text,
      });
      if (
        (receiver === null || receiver === void 0
          ? void 0
          : receiver.socketID) &&
        senderID === receiver.opponent
      ) {
        io.to(
          receiver === null || receiver === void 0 ? void 0 : receiver.socketID
        ).emit('receive-message', {
          senderID,
          receiverID,
          text,
        });
      }
    });
    socket.on('disconnect', () => {
      removeUser(socket.id);
    });
  });

  httpServer.use('/api/auth', _authRoutes.authRouter);
  httpServer.use('/api/posts', _postRoutes.postRouter);
  httpServer.use('/api/upvotes', _likesRouter.likeRouter);
  httpServer.use('/api/comments', _commentRouter.commentRouter);
  httpServer.use('/api/users', _userRouter.userRouter);
  httpServer.use('/api/topics', _topicRouter.topicRouter);
  httpServer.all('*', (req, res) => {
    handle(req, res);
  });
  httpServer.all('*', async (req, _res, next) => {
    return next(new _notFoundError.NotFoundError(req.originalUrl));
  });
  httpServer.use(_errorHandler.errorHandler);
});
