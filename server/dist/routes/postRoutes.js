"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const protect_1 = require("../middleware/protect");
const validate_request_1 = require("../middleware/validate-request");
const show_1 = __importDefault(require("../controllers/posts/show"));
const create_1 = __importDefault(require("../controllers/posts/create"));
const delete_1 = __importDefault(require("../controllers/posts/delete"));
const update_1 = __importDefault(require("../controllers/posts/update"));
const index_1 = __importDefault(require("../controllers/posts/index"));
const saved_1 = __importDefault(require("../controllers/posts/saved"));
const router = express_1.default.Router();
exports.postRouter = router;
router.use(protect_1.protect, validate_request_1.validateRequest);
router.get('/saved', saved_1.default);
router.get('/:id', show_1.default);
router.delete('/:id', delete_1.default);
router.put('/:id', [
    express_validator_1.body('topic').isEmpty().withMessage('You cannot update topic'),
    express_validator_1.body('title').isEmpty().withMessage('You cannot update title'),
    express_validator_1.body('coverImage').isEmpty().withMessage('You cannot update post image'),
], update_1.default);
router.post('/', [
    express_validator_1.body('topic').not().isEmpty().withMessage('Please select a topic'),
    express_validator_1.body('title').not().isEmpty().withMessage('Title is required'),
    express_validator_1.body('content').not().isEmpty().withMessage('Content is required'),
], create_1.default);
router.get('/', index_1.default);
//# sourceMappingURL=postRoutes.js.map