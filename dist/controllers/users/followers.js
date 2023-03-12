"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const user_1 = require("../../models/user");
const followers = async (req, res, next) => {
    const users = await user_1.User.findById(req.user._id).select('-password').populate({
        path: 'following',
        select: 'photo username',
    });
    if (!users) {
        return next(new not_found_error_1.NotFoundError('Following'));
    }
    res.status(200).send({
        following: users.following,
    });
};
exports.default = followers;
//# sourceMappingURL=followers.js.map