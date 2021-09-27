"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_authorized_error_1 = require("../../errors/not-authorized-error");
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
const editProfile = async (req, res) => {
    const user = await user_1.User.findById(req.currentUser._id);
    if (req.body.password || req.body.currentPassword || req.body.newPassword) {
        throw new bad_request_error_1.BadRequestError('This route is not for password updates. Please use /update-password.');
    }
    if (!user) {
        throw new not_found_error_1.NotFoundError('User');
    }
    if (user._id.toString() !== req.currentUser._id.toString()) {
        throw new not_authorized_error_1.NotAuthorizedError();
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