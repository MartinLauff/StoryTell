"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topicRouter = void 0;
const express_1 = __importDefault(require("express"));
const protect_1 = require("../middleware/protect");
const validate_request_1 = require("../middleware/validate-request");
const topics_1 = __importDefault(require("../controllers/topics/topics"));
const router = express_1.default.Router();
exports.topicRouter = router;
router.get('/:slug', protect_1.protect, validate_request_1.validateRequest, topics_1.default);
//# sourceMappingURL=topicRouter.js.map