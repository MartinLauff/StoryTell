"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("../../models/comment");
const bad_request_error_1 = require("../../errors/bad-request-error");
const activity_1 = require("../../models/activity");
const post_1 = require("../../models/post");
const catchAsync_1 = require("../../errors/catchAsync");
const createComment = catchAsync_1.catchAsync(async (req, res, next) => {
    const { content } = req.body;
    const post = await post_1.Post.findById(req.params.id);
    if (!content) {
        return next(new bad_request_error_1.BadRequestError('A comment must have a text'));
    }
    const comment = await comment_1.Comment.create({
        content,
        postedBy: req.user._id,
        post: post === null || post === void 0 ? void 0 : post._id,
    });
    await activity_1.Activity.create({
        post: req.params.id,
        type: 'commented on your post',
        user: req.user._id,
        linkToUser: post === null || post === void 0 ? void 0 : post.postedBy,
    });
    res.status(201).send(comment);
});
exports.default = createComment;
//# sourceMappingURL=create.js.map