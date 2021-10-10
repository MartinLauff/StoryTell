"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = require("./middleware/error-handler");
const not_found_error_1 = require("./errors/not-found-error");
const authRoutes_1 = require("./routes/authRoutes");
const postRoutes_1 = require("./routes/postRoutes");
const commentRouter_1 = require("./routes/commentRouter");
const likesRouter_1 = require("./routes/likesRouter");
const userRouter_1 = require("./routes/userRouter");
const topicRouter_1 = require("./routes/topicRouter");
const app = express_1.default();
app.set('trust proxy', true);
app.use(cors_1.default({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.options('*', cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.json({ limit: '10kb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookie_parser_1.default());
app.use('/api/auth', authRoutes_1.authRouter);
app.use('/api/posts', postRoutes_1.postRouter);
app.use('/api/upvotes', likesRouter_1.likeRouter);
app.use('/api/comments', commentRouter_1.commentRouter);
app.use('/api/users', userRouter_1.userRouter);
app.use('/api/topics', topicRouter_1.topicRouter);
app.all('*', async (req, _res, next) => {
    return next(new not_found_error_1.NotFoundError(req.originalUrl));
});
app.use(error_handler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map