"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bad_request_error_1 = require("../../errors/bad-request-error");
const user_1 = require("../../models/user");
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const existingEmail = await user_1.User.findOne({ email });
    const existingUsername = await user_1.User.findOne({ username });
    if (existingUsername || existingEmail) {
        return next(new bad_request_error_1.BadRequestError(`${existingUsername ? 'Username' : 'Email'} in use`));
    }
    const newUser = await user_1.User.create({
        username,
        email,
        password,
    });
    const token = jsonwebtoken_1.default.sign({
        _id: newUser._id,
        role: newUser.role,
    }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.cookie('jwt', token, {
        expires: new Date(Date.now() +
            Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
        httpOnly: true,
    });
    newUser.password = undefined;
    res.status(201).json({
        token,
        data: {
            newUser,
        },
    });
};
exports.default = signup;
//# sourceMappingURL=signup.js.map