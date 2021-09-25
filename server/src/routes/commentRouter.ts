import express from 'express';
import { requireAuth } from '../middleware/require-auth';
import { validateRequest } from '../middleware/validate-request';
import { currentUserMiddleware } from '../middleware/current-user';
import createComment from '../controllers/comments/create';
import deleteComment from '../controllers/comments/delete';

const router = express.Router();

// Protect all routes after this middleware
router.use(currentUserMiddleware, requireAuth, validateRequest);

router.post('/:id', createComment);
router.delete('/:id', deleteComment);

export { router as commentRouter };
