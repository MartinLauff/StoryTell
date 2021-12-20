import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/not-found-error';
import { User } from '../../models/user';

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user._id)
    .populate({
      path: 'posts',
      model: 'Post',
      populate: {
        path: 'postedBy',
        model: 'User',
        select: { _id: 1, username: 1, photo: 1 },
      },
    })
    .select('-password');

  if (!user) {
    return next(new NotFoundError('User'));
  }

  // SEND RESPONSE
  res.status(200).send({
    user,
    userId: req.user._id,
  });
};

export default myProfile;
