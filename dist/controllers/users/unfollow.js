"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const catchAsync_1 = require("../../errors/catchAsync");
const unfollow = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const givingUnfollow = await user_1.User.findByIdAndUpdate(req.params.id, {
        $pull: { followers: req.user._id },
    }, {
        new: true,
    }).select('-password');
    const getttingUnfollow = await user_1.User.findByIdAndUpdate(req.user._id, {
        $pull: { following: req.params.id },
    }, { new: true }).select('-password');
    res.status(200).send({
        follower: givingUnfollow,
        following: getttingUnfollow,
    });
});
exports.default = unfollow;
//# sourceMappingURL=unfollow.js.map