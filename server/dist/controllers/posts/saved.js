"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const post_1 = require("../../models/post");
const saved = async (req, res) => {
    const user = await user_1.User.findById(req.currentUser._id);
    const posts = await post_1.Post.find({
        _id: { $in: user === null || user === void 0 ? void 0 : user.savedPosts },
    });
    res.status(200).send(posts);
};
exports.default = saved;
//# sourceMappingURL=saved.js.map