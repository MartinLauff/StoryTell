"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = __importDefault(require("express"));
const require_auth_1 = require("../middleware/require-auth");
const validate_request_1 = require("../middleware/validate-request");
const current_user_1 = require("../middleware/current-user");
const create_1 = __importDefault(require("../controllers/comments/create"));
const delete_1 = __importDefault(require("../controllers/comments/delete"));
const router = express_1.default.Router();
exports.commentRouter = router;
router.use(current_user_1.currentUserMiddleware, require_auth_1.requireAuth, validate_request_1.validateRequest);
router.post('/:id', create_1.default);
router.delete('/:id', delete_1.default);
//# sourceMappingURL=commentRouter.js.map