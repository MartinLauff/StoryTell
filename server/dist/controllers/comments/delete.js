"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
const not_found_error_1 = require("../../errors/not-found-error");
const comment_1 = require("../../models/comment");
const catchAsync_1 = require("../../errors/catchAsync");
const deleteComment = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const comment = await comment_1.Comment.findById(req.params.id);
    if (!comment) {
        return next(new not_found_error_1.NotFoundError('Comment'));
    }
    if (comment.postedBy.toString() !== req.user._id.toString()) {
        return next(new not_authorized_error_1.NotAuthorizedError("Can't update foreign post"));
    }
    await comment_1.Comment.deleteOne({ _id: comment._id });
    res.status(204).send(null);
});
exports.default = deleteComment;
//# sourceMappingURL=delete.js.map