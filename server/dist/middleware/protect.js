"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const util_1 = require("util");
const not_authorized_error_1 = require("../errors/not-authorized-error");
const user_1 = require("../models/user");
const protect = async (req, _res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    else if (req.cookies.jwt && req.cookies.jwt !== 'loggedout') {
        token = req.cookies.jwt;
    }
    if (!token) {
        return next(new not_authorized_error_1.NotAuthorizedError('You are not logged in! Please log in to get access.'));
    }
    const decoded = await (0, util_1.promisify)(jsonwebtoken_1.default.verify)(token, process.env.JWT_KEY);
    const currentUser = await user_1.User.findById(decoded._id);
    if (!currentUser) {
        return next(new not_authorized_error_1.NotAuthorizedError('The user belonging to this token does no longer exist.'));
    }
    req.user = currentUser;
    next();
};
exports.protect = protect;
//# sourceMappingURL=protect.js.map