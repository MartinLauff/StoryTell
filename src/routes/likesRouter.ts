import express from 'express';
import { protect } from '../middleware/protect';
import { validateRequest } from '../middleware/validate-request';
import createLike from '../controllers/likes/create';
import deleteLike from '../controllers/likes/delete';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect, validateRequest);

router.put('/:id/like', createLike);
router.put('/:id/unlike', deleteLike);

export { router as likeRouter };
