import express from 'express';
import { protect } from '../middleware/protect';
import { validateRequest } from '../middleware/validate-request';
import index from '../controllers/topics/topics';

const router = express.Router();

router.get('/:slug', protect, validateRequest, index);

export { router as topicRouter };
