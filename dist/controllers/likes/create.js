"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const activity_1 = require("../../models/activity");
const catchAsync_1 = require("../../errors/catchAsync");
const bad_request_error_1 = require("../../errors/bad-request-error");
const createLike = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    try {
        const post = await post_1.Post.findById(req.params.id);
        if (!post) {
            return next(new bad_request_error_1.BadRequestError('Post was deleted'));
        }
        const like = await post_1.Post.updateOne({ _id: post._id }, { $addToSet: { likes: req.user._id } });
        await activity_1.Activity.create({
            post: post._id,
            type: 'liked your post',
            user: req.user._id,
            linkToUser: post.postedBy,
            topic: post.slug,
        });
        res.status(201).send(like);
    }
    catch (err) {
        res.send({ error: err });
    }
});
exports.default = createLike;
//# sourceMappingURL=create.js.map