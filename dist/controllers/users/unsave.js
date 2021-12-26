"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const catchAsync_1 = require("../../errors/catchAsync");
const unsave = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const unsaved = await user_1.User.updateOne({
        _id: req.user._id,
    }, {
        $pull: { savedPosts: req.params.id },
    });
    res.status(200).send(unsaved);
});
exports.default = unsave;
//# sourceMappingURL=unsave.js.map