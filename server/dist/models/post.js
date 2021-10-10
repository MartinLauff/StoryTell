"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const slugify_1 = __importDefault(require("slugify"));
const postSchema = new mongoose_1.default.Schema({
    topic: { type: String, required: true },
    title: {
        type: String,
        trim: true,
        required: true,
        minLength: 5,
    },
    slug: String,
    coverImage: String,
    content: {
        type: String,
        trim: true,
        required: [true, 'Post must have a text.'],
        minLength: 10,
    },
    likes: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    postedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
postSchema.virtual('comments', {
    ref: 'Comment',
    foreignField: 'post',
    localField: '_id',
});
postSchema.pre('save', function (next) {
    this.slug = (0, slugify_1.default)(this.topic, { lower: true });
    next();
});
postSchema.statics.build = (attrs) => {
    return new Post(attrs);
};
const Post = mongoose_1.default.model('Post', postSchema);
exports.Post = Post;
//# sourceMappingURL=post.js.map