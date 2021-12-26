"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const currentUserMiddleware = (req, _res, next) => {
    if (!req.cookies.jwt) {
        return next();
    }
    try {
        const payload = jsonwebtoken_1.default.verify(req.cookies.jwt, process.env.JWT_KEY);
        req.user = payload;
    }
    catch (err) { }
    next();
};
exports.currentUserMiddleware = currentUserMiddleware;
//# sourceMappingURL=isLoggedIn.js.map