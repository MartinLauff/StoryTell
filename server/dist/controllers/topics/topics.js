"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const index = async (req, res) => {
    const posts = await post_1.Post.find({
        slug: req.params.slug,
    })
        .populate({
        path: 'postedBy',
        select: 'photo username',
    })
        .sort('-createdAt');
    res.status(200).send({
        coverImage: `${req.params.slug}.jpeg`,
        data: posts,
    });
};
exports.default = index;
//# sourceMappingURL=topics.js.map