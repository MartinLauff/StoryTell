"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const post_1 = require("../../models/post");
const showPost = async (req, res, next) => {
    const post = await post_1.Post.findById(req.params.id)
        .populate({
        path: 'comments',
        select: '-__v',
    })
        .populate({
        path: 'postedBy',
        select: 'photo username',
    });
    if (!post) {
        return next(new not_found_error_1.NotFoundError('Post'));
    }
    res.status(200).send({
        data: {
            post,
        },
    });
};
exports.default = showPost;
//# sourceMappingURL=show.js.map