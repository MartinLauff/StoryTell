import express from 'express';
import { validateRequest } from '../middleware/validate-request';
import currentUser from '../controllers/auth/currentUser';
import signup from '../controllers/auth/signup';
import signin from '../controllers/auth/signin';
import signout from '../controllers/auth/signout';
import { currentUserMiddleware } from '../middleware/isLoggedIn';

const router = express.Router();

router.get('/currentuser', currentUserMiddleware, currentUser);
router.post('/signup', validateRequest, signup);
router.post('/signin', validateRequest, signin);
router.post('/signout', signout);

export { router as authRouter };
