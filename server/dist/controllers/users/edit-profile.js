"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const bad_request_error_1 = require("../../errors/bad-request-error");
const user_1 = require("../../models/user");
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
        if (allowedFields.includes(el))
            newObj[el] = obj[el];
    });
    return newObj;
};
const editProfile = async (req, res, next) => {
    const user = await user_1.User.findById(req.user._id);
    if (req.body.password || req.body.currentPassword || req.body.newPassword) {
        return next(new bad_request_error_1.BadRequestError('This route is not for password updates. Please use /update-password.'));
    }
    if (!user) {
        return next(new not_found_error_1.NotFoundError('User'));
    }
    const filteredBody = filterObj(req.body, 'photo', 'username', 'hobby', 'email');
    const updatedUser = await user_1.User.findByIdAndUpdate(user._id, filteredBody, {
        new: true,
        runValidators: true,
    });
    res.status(200).send(updatedUser);
};
exports.default = editProfile;
//# sourceMappingURL=edit-profile.js.map