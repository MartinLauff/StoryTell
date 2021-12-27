import express from 'express';
import { protect } from '../middleware/protect';
import { validateRequest } from '../middleware/validate-request';
import createComment from '../controllers/comments/create';
import deleteComment from '../controllers/comments/delete';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect, validateRequest);

router.post('/:id', createComment);
router.delete('/:id', deleteComment);

export { router as commentRouter };
