"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const unfollow = async (req, res) => {
    const givingUnfollow = await user_1.User.findByIdAndUpdate(req.params.id, {
        $pull: { followers: req.currentUser._id },
    }, {
        new: true,
    }).select('-password');
    const getttingUnfollow = await user_1.User.findByIdAndUpdate(req.currentUser._id, {
        $pull: { following: req.params.id },
    }, { new: true }).select('-password');
    res.status(200).send({
        follower: givingUnfollow,
        following: getttingUnfollow,
    });
};
exports.default = unfollow;
//# sourceMappingURL=unfollow.js.map