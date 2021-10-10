"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const catchAsync_1 = require("../../errors/catchAsync");
const deleteLike = catchAsync_1.catchAsync(async (req, res) => {
    try {
        const unlike = await post_1.Post.updateOne({
            _id: req.params.id,
        }, {
            $pull: { likes: req.user._id },
        });
        res.status(200).send(unlike);
    }
    catch (err) {
        res.send({ error: err });
    }
});
exports.default = deleteLike;
//# sourceMappingURL=delete.js.map