"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bad_request_error_1 = require("../../errors/bad-request-error");
const not_found_error_1 = require("../../errors/not-found-error");
const user_1 = require("../../models/user");
const password_1 = require("../auth/password");
const updatePassword = async (req, res, next) => {
    const user = await user_1.User.findById(req.user._id).select('+password');
    if (!user) {
        return next(new not_found_error_1.NotFoundError('User'));
    }
    if (!(await password_1.Password.compare(user.password, req.body.currentPassword))) {
        return next(new bad_request_error_1.BadRequestError('Your current password is wrong.'));
    }
    user.password = req.body.newPassword;
    await user.save();
    const token = jsonwebtoken_1.default.sign({
        _id: user._id,
    }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.cookie('jwt', token, {
        expires: new Date(Date.now() +
            Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    });
    user.password = undefined;
    res.status(200).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};
exports.default = updatePassword;
//# sourceMappingURL=update-password.js.map