import express from 'express';
import { requireAuth } from '../middleware/require-auth';
import { validateRequest } from '../middleware/validate-request';
import { currentUserMiddleware } from '../middleware/current-user';
import createLike from '../controllers/likes/create';
import deleteLike from '../controllers/likes/delete';

const router = express.Router();

// Protect all routes after this middleware
router.use(currentUserMiddleware, requireAuth, validateRequest);

router.put('/:id/like', createLike);
router.put('/:id/unlike', deleteLike);

export { router as likeRouter };
