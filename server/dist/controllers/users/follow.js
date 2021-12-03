"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const activity_1 = require("../../models/activity");
const catchAsync_1 = require("../../errors/catchAsync");
const follow = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const givingFollow = await user_1.User.findByIdAndUpdate(req.params.id, { $addToSet: { followers: req.user._id } }, { new: true }).select('-password');
    const getttingFollow = await user_1.User.findByIdAndUpdate(req.user._id, { $addToSet: { following: req.params.id } }, { new: true }).select('-password');
    await activity_1.Activity.create({
        type: 'started following you',
        user: req.user._id,
        linkToUser: req.params.id,
    });
    res.status(200).send({
        follower: givingFollow,
        following: getttingFollow,
    });
});
exports.default = follow;
//# sourceMappingURL=follow.js.map