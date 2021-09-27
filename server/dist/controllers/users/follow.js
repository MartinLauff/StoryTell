"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const activity_1 = require("../../models/activity");
const follow = async (req, res) => {
    const givingFollow = await user_1.User.updateOne({ _id: req.params.id }, {
        $addToSet: { followers: req.currentUser._id },
    }).select('-password');
    const getttingFollow = await user_1.User.updateOne({ _id: req.currentUser._id }, {
        $addToSet: { following: req.params.id },
    }).select('-password');
    await activity_1.Activity.create({
        type: 'started following you',
        user: req.currentUser._id,
        linkToUser: req.params.id,
    });
    res.status(200).send({
        follower: givingFollow,
        following: getttingFollow,
    });
};
exports.default = follow;
//# sourceMappingURL=follow.js.map