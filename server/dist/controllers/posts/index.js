"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const index = async (req, res) => {
    var _a;
    const posts = await post_1.Post.find({
        postedBy: { $in: (_a = req.user) === null || _a === void 0 ? void 0 : _a.following },
    })
        .populate({
        path: 'postedBy',
        select: 'photo username',
    })
        .sort('-createdAt');
    res.status(200).send({
        results: posts.length,
        data: posts,
    });
};
exports.default = index;
//# sourceMappingURL=index.js.map