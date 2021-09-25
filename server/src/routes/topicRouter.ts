import express from 'express';
import { requireAuth } from '../middleware/require-auth';
import { validateRequest } from '../middleware/validate-request';
import { currentUserMiddleware } from '../middleware/current-user';
import index from '../controllers/topics/topics';

const router = express.Router();

// Protect all routes after this middleware
router.use(currentUserMiddleware, requireAuth, validateRequest);

router.get('/:slug', index);

export { router as topicRouter };
