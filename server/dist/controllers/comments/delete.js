"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
const not_found_error_1 = require("../../errors/not-found-error");
const comment_1 = require("../../models/comment");
const deleteComment = async (req, res) => {
    const comment = await comment_1.Comment.findById(req.params.id);
    if (!comment) {
        throw new not_found_error_1.NotFoundError('Comment');
    }
    if (comment.postedBy.toString() !== req.currentUser._id.toString()) {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    await comment_1.Comment.deleteOne({ _id: comment._id });
    res.status(204).send(null);
};
exports.default = deleteComment;
//# sourceMappingURL=delete.js.map