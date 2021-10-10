"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const protect_1 = require("../middleware/protect");
const validate_request_1 = require("../middleware/validate-request");
const currentUser_1 = __importDefault(require("../controllers/auth/currentUser"));
const signup_1 = __importDefault(require("../controllers/auth/signup"));
const signin_1 = __importDefault(require("../controllers/auth/signin"));
const signout_1 = __importDefault(require("../controllers/auth/signout"));
const router = express_1.default.Router();
exports.authRouter = router;
router.get('/currentuser', protect_1.protect, currentUser_1.default);
router.post('/signup', validate_request_1.validateRequest, signup_1.default);
router.post('/signin', validate_request_1.validateRequest, signin_1.default);
router.post('/signout', signout_1.default);
//# sourceMappingURL=authRoutes.js.map