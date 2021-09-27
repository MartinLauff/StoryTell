"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cookie_session_1 = __importDefault(require("cookie-session"));
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
app.use(express_1.default.json());
app.use(cookie_session_1.default({
    signed: false,
    secure: false,
}));
app.use(express_1.default.json({ limit: '10kb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
app.use('/api/auth', authRoutes_1.authRouter);
app.use('/api/posts', postRoutes_1.postRouter);
app.use('/api/upvotes', likesRouter_1.likeRouter);
app.use('/api/comments', commentRouter_1.commentRouter);
app.use('/api/users', userRouter_1.userRouter);
app.use('/api/topics', topicRouter_1.topicRouter);
app.all('*', async (_req, _res) => {
    throw new not_found_error_1.NotFoundError('Route');
});
app.use(error_handler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map