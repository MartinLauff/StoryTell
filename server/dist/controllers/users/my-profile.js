"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const user_1 = require("../../models/user");
const myProfile = async (req, res) => {
    const user = await user_1.User.findById(req.currentUser._id)
        .populate('posts')
        .select('-password');
    if (!user) {
        throw new not_found_error_1.NotFoundError('User');
    }
    res.status(200).send(user);
};
exports.default = myProfile;
//# sourceMappingURL=my-profile.js.map