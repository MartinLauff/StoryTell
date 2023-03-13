'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var next_1 = __importDefault(require('next'));
require('express-async-errors');
var cookie_parser_1 = __importDefault(require('cookie-parser'));
var express_rate_limit_1 = __importDefault(require('express-rate-limit'));
var path_1 = __importDefault(require('path'));
var helmet_1 = __importDefault(require('helmet'));
var express_mongo_sanitize_1 = __importDefault(
  require('express-mongo-sanitize')
);
var xss_clean_1 = __importDefault(require('xss-clean'));
var compression_1 = __importDefault(require('compression'));
var cors_1 = __importDefault(require('cors'));
var mongoose_1 = __importDefault(require('mongoose'));
var http_1 = require('http');
var socket_io_1 = require('socket.io');
var dotenv_1 = __importDefault(require('dotenv'));
var error_handler_1 = require('./dist/middleware/error-handler');
var not_found_error_1 = require('./dist/errors/not-found-error');
var authRoutes_1 = require('./dist/routes/authRoutes');
var postRoutes_1 = require('./dist/routes/postRoutes');
var commentRouter_1 = require('./dist/routes/commentRouter');
var likesRouter_1 = require('./dist/routes/likesRouter');
var userRouter_1 = require('./dist/routes/userRouter');
var topicRouter_1 = require('./dist/routes/topicRouter');
const dev = 'production' !== process.env.NODE_ENV,
  app = (0, next_1.default)({
    dev,
  }),
  handle = app.getRequestHandler();
app.prepare().then(() => {
  var e = (0, express_1.default)();
  e.set('trust proxy', true);
  e.use((0, cors_1.default)({ credentials: true, origin: true }));
  e.options('*', (0, cors_1.default)());
  e.use(express_1.default.json());
  e.use((0, helmet_1.default)());
  e.use(
    helmet_1.default.contentSecurityPolicy({
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
      },
    })
  );
  var limiter = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour.',
  });
  e.use('/api', limiter);
  e.use(express_1.default.json({ limit: '10kb' }));
  e.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
  e.use((0, cookie_parser_1.default)());
  e.use((0, express_mongo_sanitize_1.default)());
  e.use((0, xss_clean_1.default)());
  e.use((0, compression_1.default)());
  if (process.env.NODE_ENV === 'production') {
    e.use(express_1.default.static(path_1.default.join(__dirname, '../')));
    e.get('/*', function (_req, res) {
      res.sendFile(path_1.default.join(__dirname, '../', '_next'));
    });
  }
  e.use('/api/auth', authRoutes_1.authRouter);
  e.use('/api/posts', postRoutes_1.postRouter);
  e.use('/api/upvotes', likesRouter_1.likeRouter);
  e.use('/api/comments', commentRouter_1.commentRouter);
  e.use('/api/users', userRouter_1.userRouter);
  e.use('/api/topics', topicRouter_1.topicRouter);
  e.all('*', (req, res) => {
    handle(req, res);
  }),
    e.all('*', function (req, _res, next) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [
            2,
            next(new not_found_error_1.NotFoundError(req.originalUrl)),
          ];
        });
      });
    });
  e.use(error_handler_1.errorHandler);
  var httpServer = (0, http_1.createServer)(e);
  process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });
  dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../config.env'),
  });
  if (!process.env.DATABASE) {
    throw new Error('DATABASE must be defined');
  }
  if (!process.env.DATABASE_PASSWORD) {
    throw new Error('DATABASE_PASSWORD must be defined');
  }
  var DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
  mongoose_1.default.connect(DB).then(function () {
    return console.log('DB connection successful!');
  });
  var io = new socket_io_1.Server(httpServer, {
    cors: {
      origin: 'https://storytell.onrender.com/',
    },
  });
  var port = process.env.PORT || 3000;
  var server = httpServer.listen(port, function () {
    console.log('App running on port ' + port);
  });
  process.on('unhandledRejection', function (err) {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(
      err === null || err === void 0 ? void 0 : err.name,
      err === null || err === void 0 ? void 0 : err.message
    );
    server.close(function () {
      process.exit(1);
    });
  });
  process.on('SIGTERM', function () {
    console.log('O SIGTERM RECEIVED. Shutting down gracefully.');
    server.close(function () {
      console.log('X Process terminated!');
    });
  });
  var onlineUsers = [];
  var addNewUser = function (userID, socketID, opponent) {
    !onlineUsers.some(function (user) {
      return user.userID === userID;
    }) &&
      onlineUsers.push({
        userID: userID,
        socketID: socketID,
        opponent: opponent,
      });
  };
  var removeUser = function (socketID) {
    onlineUsers = onlineUsers.filter(function (user) {
      return user.socketID !== socketID;
    });
  };
  var getUser = function (userID) {
    return onlineUsers.find(function (user) {
      return user.userID === userID;
    });
  };
  io.on('connection', function (socket) {
    socket.on('connect-user', function (userID, opponent) {
      addNewUser(userID, socket.id, opponent);
    });
    socket.on('send-message', function (_a) {
      var senderID = _a.senderID,
        receiverID = _a.receiverID,
        text = _a.text;
      var receiver = getUser(receiverID);
      io.to(socket.id).emit('receive-message', {
        senderID: senderID,
        receiverID: receiverID,
        text: text,
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
          senderID: senderID,
          receiverID: receiverID,
          text: text,
        });
      }
    });
    socket.on('disconnect', function () {
      removeUser(socket.id);
    });
  });
  //# sourceMappingURL=testtos.js.map
});
