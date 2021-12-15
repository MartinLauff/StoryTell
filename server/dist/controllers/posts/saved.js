"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const saved = async (req, res) => {
    var _a;
    const posts = await post_1.Post.find({
        _id: { $in: (_a = req.user) === null || _a === void 0 ? void 0 : _a.savedPosts },
    });
    res.status(200).send(posts);
};
exports.default = saved;
//# sourceMappingURL=saved.js.map