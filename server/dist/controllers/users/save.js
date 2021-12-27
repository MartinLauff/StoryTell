"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const catchAsync_1 = require("../../errors/catchAsync");
const save = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const saved = await user_1.User.updateOne({
        _id: req.user._id,
    }, {
        $addToSet: { savedPosts: req.params.id },
    });
    res.status(200).send(saved);
});
exports.default = save;
//# sourceMappingURL=save.js.map