import express from 'express';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import path from 'path';
// import helmet from 'helmet';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import compression from 'compression';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';

import { authRouter } from './routes/authRoutes';
import { postRouter } from './routes/postRoutes';
import { commentRouter } from './routes/commentRouter';
import { likeRouter } from './routes/likesRouter';
import { userRouter } from './routes/userRouter';
import { topicRouter } from './routes/topicRouter';

const app = express();

app.set('trust proxy', true);
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
//@ts-ignore
app.options('*', cors());
app.use(express.json());

// Set security HTTP headers
// app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour.',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(ExpressMongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Compress all responses
app.use(compression());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client')));
  app.get('/*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/_next/server'));
  });
}

// ROUTES
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/upvotes', likeRouter);
app.use('/api/comments', commentRouter);
app.use('/api/users', userRouter);
app.use('/api/topics', topicRouter);

app.all('*', async (req, _res, next) => {
  return next(new NotFoundError(req.originalUrl));
});

app.use(errorHandler);

export default app;
