"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commentSchema = new mongoose_1.default.Schema({
    postedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Comment must belong to a user.'],
    },
    post: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Post',
        required: [true, 'Comment must belong to a post.'],
    },
    content: {
        type: String,
        required: [true, 'Comment must have a text.'],
        minLength: 4,
        maxLength: 30,
        trim: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
commentSchema.index({ postedBy: 1, post: 1 });
commentSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'postedBy',
        select: 'username photo',
    });
    next();
});
commentSchema.statics.build = (attrs) => {
    return new Comment(attrs);
};
const Comment = mongoose_1.default.model('Comment', commentSchema);
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map