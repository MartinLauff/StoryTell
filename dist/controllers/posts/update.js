"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
const not_found_error_1 = require("../../errors/not-found-error");
const post_1 = require("../../models/post");
const updatePost = async (req, res, next) => {
    const post = await post_1.Post.findById(req.params.id);
    if (!post) {
        return next(new not_found_error_1.NotFoundError('Post'));
    }
    if (post.postedBy.toString() !== req.user._id.toString()) {
        return next(new not_authorized_error_1.NotAuthorizedError("You can't update foreign post"));
    }
    post.set({
        content: req.body.content,
    });
    await post.save();
    res.status(200).send(post);
};
exports.default = updatePost;
//# sourceMappingURL=update.js.map