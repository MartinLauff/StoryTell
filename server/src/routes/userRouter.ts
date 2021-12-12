import express from 'express';
import { body } from 'express-validator';
import { protect } from '../middleware/protect';
import { validateRequest } from '../middleware/validate-request';
import showUser from '../controllers/users/show';
import myProfile from '../controllers/users/my-profile';
import follow from '../controllers/users/follow';
import unfollow from '../controllers/users/unfollow';
import save from '../controllers/users/save';
import unsave from '../controllers/users/unsave';
import editProfile from '../controllers/users/edit-profile';
import updatePassword from '../controllers/users/update-password';
import activities from '../controllers/users/activities';
import briefUser from '../controllers/users/briefUser';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect, validateRequest);

router.get('/activities', activities);
router.get('/brief-user', briefUser);
router.get('/my-profile', myProfile);
router.put('/update-my-profile', editProfile);
router.put(
  '/update-password',
  [body('newPassword').isEmpty().withMessage('New password must by valid')],
  updatePassword
);
router.get('/:id', showUser);
router.put('/follow/:id', follow);
router.put('/unfollow/:id', unfollow);
router.put('/save/:id', save);
router.put('/unsave/:id', unsave);

export { router as userRouter };
