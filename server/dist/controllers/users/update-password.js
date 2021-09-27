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
const updatePassword = async (req, res) => {
    const user = await user_1.User.findById(req.currentUser._id).select('+password');
    if (!user) {
        throw new not_found_error_1.NotFoundError('User');
    }
    if (!(await password_1.Password.compare(user.password, req.body.currentPassword))) {
        throw new bad_request_error_1.BadRequestError('Your current password is wrong.');
    }
    user.password = req.body.newPassword;
    await user.save();
    const userJwt = jsonwebtoken_1.default.sign({
        _id: user._id,
        email: user.email,
    }, process.env.JWT_KEY);
    req.session = { jwt: userJwt };
    res.status(200).send(user);
};
exports.default = updatePassword;
//# sourceMappingURL=update-password.js.map