"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
const not_found_error_1 = require("../../errors/not-found-error");
const post_1 = require("../../models/post");
const user_1 = require("../../models/user");
const destroyPost = async (req, res, next) => {
    const post = await post_1.Post.findById(req.params.id);
    if (!post) {
        return next(new not_found_error_1.NotFoundError('Post'));
    }
    if (post.postedBy.toString() !== req.user._id.toString()) {
        return next(new not_authorized_error_1.NotAuthorizedError("Can't update foreign post"));
    }
    await post_1.Post.deleteOne({ _id: post._id });
    await user_1.User.updateOne({ _id: req.user._id }, { $pull: { posts: post._id } });
    res.status(204).send(null);
};
exports.default = destroyPost;
//# sourceMappingURL=delete.js.map