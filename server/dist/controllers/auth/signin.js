"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bad_request_error_1 = require("../../errors/bad-request-error");
const password_1 = require("./password");
const user_1 = require("../../models/user");
const signin = async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await user_1.User.findOne({ email }).select('+password');
    if (!existingUser) {
        throw new bad_request_error_1.BadRequestError('Invalid credentials');
    }
    const passwordsMatch = await password_1.Password.compare(existingUser.password, password);
    if (!passwordsMatch) {
        throw new bad_request_error_1.BadRequestError('Invalid Credentials');
    }
    const userJwt = jsonwebtoken_1.default.sign({
        _id: existingUser._id,
        email: existingUser.email,
    }, process.env.JWT_KEY);
    req.session = { jwt: userJwt };
    res.status(200).send(existingUser);
};
exports.default = signin;
//# sourceMappingURL=signin.js.map