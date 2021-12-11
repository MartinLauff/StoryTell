"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const user_1 = require("../../models/user");
const myProfile = async (req, res, next) => {
    const user = await user_1.User.findById(req.user._id)
        .populate({
        path: 'posts',
        model: 'Post',
        populate: {
            path: 'postedBy',
            model: 'User',
            select: { _id: 1, username: 1, photo: 1 },
        },
    })
        .select('-password');
    if (!user) {
        return next(new not_found_error_1.NotFoundError('User'));
    }
    res.status(200).send(user);
};
exports.default = myProfile;
//# sourceMappingURL=my-profile.js.map