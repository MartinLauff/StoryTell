"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_request_1 = require("../middleware/validate-request");
const current_user_1 = __importDefault(require("../controllers/auth/current-user"));
const current_user_2 = require("../middleware/current-user");
const signup_1 = __importDefault(require("../controllers/auth/signup"));
const signin_1 = __importDefault(require("../controllers/auth/signin"));
const signout_1 = __importDefault(require("../controllers/auth/signout"));
const router = express_1.default.Router();
exports.authRouter = router;
router.get('/currentuser', current_user_2.currentUserMiddleware, current_user_1.default);
router.post('/signup', validate_request_1.validateRequest, signup_1.default);
router.post('/signin', validate_request_1.validateRequest, signin_1.default);
router.post('/signout', signout_1.default);
//# sourceMappingURL=authRoutes.js.map