"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const post_1 = require("../../models/post");
const index = async (req, res) => {
    const user = await user_1.User.findById(req.user._id);
    const posts = await post_1.Post.find({
        postedBy: { $in: user === null || user === void 0 ? void 0 : user.following },
    }).sort('-createdAt');
    res.status(200).send({
        results: posts.length,
        data: posts,
    });
};
exports.default = index;
//# sourceMappingURL=index.js.map