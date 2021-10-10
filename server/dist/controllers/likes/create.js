"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const activity_1 = require("../../models/activity");
const catchAsync_1 = require("../../errors/catchAsync");
const createLike = catchAsync_1.catchAsync(async (req, res) => {
    try {
        const post = await post_1.Post.findById(req.params.id);
        const like = await post_1.Post.updateOne({
            _id: post === null || post === void 0 ? void 0 : post._id,
        }, {
            $addToSet: { likes: req.user._id },
        });
        await activity_1.Activity.create({
            post: post === null || post === void 0 ? void 0 : post._id,
            type: 'liked your post',
            user: req.user._id,
            linkToUser: post === null || post === void 0 ? void 0 : post.postedBy,
        });
        res.status(201).send(like);
    }
    catch (err) {
        res.send({ error: err });
    }
});
exports.default = createLike;
//# sourceMappingURL=create.js.map