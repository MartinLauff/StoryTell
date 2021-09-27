"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const activity_1 = require("../../models/activity");
const createLike = async (req, res) => {
    var _a;
    try {
        const post = await post_1.Post.findById(req.params.id);
        const like = await post_1.Post.updateOne({
            _id: post === null || post === void 0 ? void 0 : post._id,
        }, {
            $addToSet: { likes: (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a._id },
        });
        await activity_1.Activity.create({
            post: post === null || post === void 0 ? void 0 : post._id,
            type: 'liked your post',
            user: req.currentUser._id,
            linkToUser: post === null || post === void 0 ? void 0 : post.postedBy,
        });
        res.status(201).send(like);
    }
    catch (err) {
        res.send({ error: err });
    }
};
exports.default = createLike;
//# sourceMappingURL=create.js.map