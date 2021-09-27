"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bad_request_error_1 = require("../../errors/bad-request-error");
const user_1 = require("../../models/user");
const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const existingEmail = await user_1.User.findOne({ email });
    const existingUsername = await user_1.User.findOne({ username });
    if (existingUsername || existingEmail) {
        throw new bad_request_error_1.BadRequestError(`${existingUsername ? 'Username' : 'Email'} in use`);
    }
    const newUser = await user_1.User.create({
        username,
        email,
        password,
    });
    const userJwt = jsonwebtoken_1.default.sign({
        _id: newUser._id,
        email: newUser.email,
    }, process.env.JWT_KEY);
    req.session = { jwt: userJwt };
    res.status(201).send(newUser);
};
exports.default = signup;
//# sourceMappingURL=signup.js.map