"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
const not_found_error_1 = require("../../errors/not-found-error");
const post_1 = require("../../models/post");
const updatePost = async (req, res) => {
    const post = await post_1.Post.findById(req.params.id);
    if (!post) {
        throw new not_found_error_1.NotFoundError('Post');
    }
    if (post.postedBy.toString() !== req.currentUser._id.toString()) {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    post.set({
        content: req.body.content,
    });
    await post.save();
    res.status(200).send(post);
};
exports.default = updatePost;
//# sourceMappingURL=update.js.map