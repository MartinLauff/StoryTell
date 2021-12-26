"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeRouter = void 0;
const express_1 = __importDefault(require("express"));
const protect_1 = require("../middleware/protect");
const validate_request_1 = require("../middleware/validate-request");
const create_1 = __importDefault(require("../controllers/likes/create"));
const delete_1 = __importDefault(require("../controllers/likes/delete"));
const router = express_1.default.Router();
exports.likeRouter = router;
router.use(protect_1.protect, validate_request_1.validateRequest);
router.put('/:id/like', create_1.default);
router.put('/:id/unlike', delete_1.default);
//# sourceMappingURL=likesRouter.js.map