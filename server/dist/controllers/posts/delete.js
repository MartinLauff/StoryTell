"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
const not_found_error_1 = require("../../errors/not-found-error");
const post_1 = require("../../models/post");
const destroyPost = async (req, res) => {
    const post = await post_1.Post.findById(req.params.id);
    if (!post) {
        throw new not_found_error_1.NotFoundError('Post');
    }
    if (post.postedBy.toString() !== req.currentUser._id.toString()) {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    await post_1.Post.deleteOne({ _id: post._id });
    res.status(204).send(null);
};
exports.default = destroyPost;
//# sourceMappingURL=delete.js.map