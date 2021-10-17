"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bad_request_error_1 = require("../../errors/bad-request-error");
const password_1 = require("./password");
const user_1 = require("../../models/user");
const signin = async (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = await user_1.User.findOne({ email }).select('+password');
    if (!existingUser) {
        return next(new bad_request_error_1.BadRequestError('Invalid credentials'));
    }
    const passwordsMatch = await password_1.Password.compare(existingUser.password, password);
    if (!passwordsMatch) {
        return next(new bad_request_error_1.BadRequestError('Invalid Credentials'));
    }
    const token = jsonwebtoken_1.default.sign({
        _id: existingUser._id,
        role: existingUser.role,
    }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.cookie('jwt', token, {
        expires: new Date(Date.now() +
            Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
        httpOnly: true,
    });
    existingUser.password = undefined;
    res.status(200).json({
        status: 'success',
        token,
        data: {
            existingUser,
        },
    });
};
exports.default = signin;
//# sourceMappingURL=signin.js.map