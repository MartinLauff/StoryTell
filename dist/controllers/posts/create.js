"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const bad_request_error_1 = require("../../errors/bad-request-error");
const user_1 = require("../../models/user");
const createPost = async (req, res, next) => {
    const { topic, title, content, coverImage } = req.body;
    if (!topic || !title || !content) {
        return next(new bad_request_error_1.BadRequestError('A post must have a title, topic and text'));
    }
    const post = await post_1.Post.create({
        title,
        topic,
        content,
        postedBy: req.user._id,
        coverImage,
    });
    await user_1.User.updateOne({
        _id: req.user._id,
    }, {
        $addToSet: { posts: post._id },
    });
    res.status(201).send({
        data: {
            post,
        },
    });
};
exports.default = createPost;
//# sourceMappingURL=create.js.map