import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/not-found-error';
import { User } from '../../models/user';

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user._id)
    .populate('posts')
    .select('-password');

  if (!user) {
    return next(new NotFoundError('User'));
  }

  // SEND RESPONSE
  res.status(200).send(user);
};

export default myProfile;
