"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const user_1 = require("../../models/user");
const showUser = async (req, res, next) => {
    const user = await user_1.User.findById(req.params.id)
        .select('-password')
        .populate({
        path: 'posts',
        model: 'Post',
        options: {
            limit: 5,
        },
        populate: {
            path: 'postedBy',
            model: 'User',
            select: { _id: 1, username: 1, photo: 1 },
        },
    });
    if (!user) {
        return next(new not_found_error_1.NotFoundError('User'));
    }
    res.status(200).send({
        user,
        userId: req.user._id,
    });
};
exports.default = showUser;
//# sourceMappingURL=show.js.map