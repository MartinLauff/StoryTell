import express from 'express';
import { body } from 'express-validator';
import { requireAuth } from '../middleware/require-auth';
import { validateRequest } from '../middleware/validate-request';
import { currentUserMiddleware } from '../middleware/current-user';
import showPost from '../controllers/posts/show';
import createPost from '../controllers/posts/create';
import destroyPost from '../controllers/posts/delete';
import updatePost from '../controllers/posts/update';
import index from '../controllers/posts/index';
import saved from '../controllers/posts/saved';

const router = express.Router();

// Protect all routes after this middleware
router.use(currentUserMiddleware, requireAuth, validateRequest);

router.get('/saved', saved);
router.get('/:id', showPost);

router.delete('/:id', destroyPost);
router.put(
  '/:id',
  [
    body('topic').isEmpty().withMessage('You cannot update topic'),
    body('title').isEmpty().withMessage('You cannot update title'),
    body('coverImage').isEmpty().withMessage('You cannot update post image'),
  ],
  updatePost
);
router.post(
  '/',
  [
    body('topic').not().isEmpty().withMessage('Please select a topic'),
    body('title').not().isEmpty().withMessage('Title is required'),
    body('content').not().isEmpty().withMessage('Content is required'),
  ],
  createPost
);
router.get('/', index);

export { router as postRouter };
