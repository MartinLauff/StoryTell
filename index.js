'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (e, t, o, n) {
      return new (o || (o = Promise))(function (r, s) {
        function u(e) {
          try {
            a(n.next(e));
          } catch (t) {
            s(t);
          }
        }

        function i(e) {
          try {
            a(n.throw(e));
          } catch (t) {
            s(t);
          }
        }

        function a(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value) instanceof o
                ? t
                : new o(function (e) {
                    e(t);
                  })
              ).then(u, i);
        }
        a((n = n.apply(e, t || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function (e, t) {
      var o,
        n,
        r,
        s,
        u = {
          label: 0,
          sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (s = {
          next: i(0),
          throw: i(1),
          return: i(2),
        }),
        'function' == typeof Symbol &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );

      function i(s) {
        return function (i) {
          return (function s(i) {
            if (o) throw TypeError('Generator is already executing.');
            for (; u; )
              try {
                if (
                  ((o = 1),
                  n &&
                    (r =
                      2 & i[0]
                        ? n.return
                        : i[0]
                        ? n.throw || ((r = n.return) && r.call(n), 0)
                        : n.next) &&
                    !(r = r.call(n, i[1])).done)
                )
                  return r;
                switch (((n = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return (
                      u.label++,
                      {
                        value: i[1],
                        done: !1,
                      }
                    );
                  case 5:
                    u.label++, (n = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !(r = (r = u.trys).length > 0 && r[r.length - 1]) &&
                      (6 === i[0] || 2 === i[0])
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                      u.label = i[1];
                      break;
                    }
                    if (6 === i[0] && u.label < r[1]) {
                      (u.label = r[1]), (r = i);
                      break;
                    }
                    if (r && u.label < r[2]) {
                      (u.label = r[2]), u.ops.push(i);
                      break;
                    }
                    r[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                i = t.call(e, u);
              } catch (a) {
                (i = [6, a]), (n = 0);
              } finally {
                o = r = 0;
              }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0,
            };
          })([s, i]);
        };
      }
    },
  __importDefault =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    };
Object.defineProperty(exports, '__esModule', {
  value: !0,
});
var express_1 = __importDefault(require('express')),
  _next = __importDefault(require('next'));
require('express-async-errors');
var cookie_parser_1 = __importDefault(require('cookie-parser')),
  express_rate_limit_1 = __importDefault(require('express-rate-limit')),
  path_1 = __importDefault(require('path')),
  helmet_1 = __importDefault(require('helmet')),
  express_mongo_sanitize_1 = __importDefault(require('express-mongo-sanitize')),
  xss_clean_1 = __importDefault(require('xss-clean')),
  compression_1 = __importDefault(require('compression')),
  cors_1 = __importDefault(require('cors')),
  mongoose_1 = __importDefault(require('mongoose')),
  http_1 = require('http'),
  socket_io_1 = require('socket.io'),
  dotenv_1 = __importDefault(require('dotenv')),
  error_handler_1 = require('./dist/middleware/error-handler'),
  not_found_error_1 = require('./dist/errors/not-found-error'),
  authRoutes_1 = require('./dist/routes/authRoutes'),
  postRoutes_1 = require('./dist/routes/postRoutes'),
  commentRouter_1 = require('./dist/routes/commentRouter'),
  likesRouter_1 = require('./dist/routes/likesRouter'),
  userRouter_1 = require('./dist/routes/userRouter'),
  topicRouter_1 = require('./dist/routes/topicRouter');
const dev = 'production' !== process.env.NODE_ENV,
  app = (0, _next.default)({
    dev,
  }),
  handle = app.getRequestHandler();
app.prepare().then(() => {
  var e = (0, express_1.default)();
  e.set('trust proxy', !0),
    e.use(
      (0, cors_1.default)({
        credentials: !0,
        origin: !0,
      })
    ),
    e.options('*', (0, cors_1.default)()),
    e.use(express_1.default.json()),
    e.use((0, helmet_1.default)()),
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
  var t = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 36e5,
    message: 'Too many requests from this IP, please try again in an hour.',
  });
  if (
    (e.use('/api', t),
    e.use(
      express_1.default.json({
        limit: '10kb',
      })
    ),
    e.use(
      express_1.default.urlencoded({
        extended: !0,
        limit: '10kb',
      })
    ),
    e.use((0, cookie_parser_1.default)()),
    e.use((0, express_mongo_sanitize_1.default)()),
    e.use((0, xss_clean_1.default)()),
    e.use((0, compression_1.default)()),
    'production' === process.env.NODE_ENV &&
      e.get('/*', function (e, t) {
        t.sendFile(path_1.default.join(__dirname, '../_next'));
      }),
    e.use('/api/auth', authRoutes_1.authRouter),
    e.use('/api/posts', postRoutes_1.postRouter),
    e.use('/api/upvotes', likesRouter_1.likeRouter),
    e.use('/api/comments', commentRouter_1.commentRouter),
    e.use('/api/users', userRouter_1.userRouter),
    e.use('/api/topics', topicRouter_1.topicRouter),
    e.all('*', (e, t) => {
      handle(e, t);
    }),
    e.all('*', function (e, t, o) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (t) {
          return [2, o(new not_found_error_1.NotFoundError(e.originalUrl))];
        });
      });
    }),
    e.use(error_handler_1.errorHandler),
    process.on('uncaughtException', function (e) {
      console.log('UNCAUGHT EXCEPTION! Shutting down...'),
        console.log(e.name, e.message),
        process.exit(1);
    }),
    dotenv_1.default.config({
      path: path_1.default.join(__dirname, './config.env'),
    }),
    !process.env.DATABASE)
  )
    throw Error('DATABASE must be defined');
  if (!process.env.DATABASE_PASSWORD)
    throw Error('DATABASE_PASSWORD must be defined');
  var o = (0, http_1.createServer)(e),
    n = process.env.DATABASE.replace(
      '<password>',
      process.env.DATABASE_PASSWORD
    );
  mongoose_1.default.connect(n).then(function () {
    return console.log('DB connection successful!');
  });
  var r = new socket_io_1.Server(o, {
      cors: {
        origin: 'https://storytell.onrender.com/',
      },
    }),
    s = process.env.PORT || 3e3,
    u = o.listen(s, function () {
      console.log('App running on port ' + s);
    });
  process.on('unhandledRejection', function (e) {
    console.log('UNHANDLED REJECTION! Shutting down...'),
      console.log(null == e ? void 0 : e.name, null == e ? void 0 : e.message),
      u.close(function () {
        process.exit(1);
      });
  }),
    process.on('SIGTERM', function () {
      console.log('O SIGTERM RECEIVED. Shutting down gracefully.'),
        u.close(function () {
          console.log('X Process terminated!');
        });
    });
  var i = [],
    a = function (e, t, o) {
      i.some(function (t) {
        return t.userID === e;
      }) ||
        i.push({
          userID: e,
          socketID: t,
          opponent: o,
        });
    },
    l = function (e) {
      i = i.filter(function (t) {
        return t.socketID !== e;
      });
    },
    c = function (e) {
      return i.find(function (t) {
        return t.userID === e;
      });
    };
  r.on('connection', function (e) {
    e.on('connect-user', function (t, o) {
      a(t, e.id, o);
    }),
      e.on('send-message', function (t) {
        var o = t.senderID,
          n = t.receiverID,
          s = t.text,
          u = c(n);
        r.to(e.id).emit('receive-message', {
          senderID: o,
          receiverID: n,
          text: s,
        }),
          (null == u ? void 0 : u.socketID) &&
            o === u.opponent &&
            r.to(null == u ? void 0 : u.socketID).emit('receive-message', {
              senderID: o,
              receiverID: n,
              text: s,
            });
      }),
      e.on('disconnect', function () {
        l(e.id);
      });
  });
});
