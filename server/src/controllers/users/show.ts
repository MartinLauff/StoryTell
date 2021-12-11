import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/not-found-error';
import { User } from '../../models/user';

const showUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.params.id)
    .select('-password')
    .populate({
      path: 'posts',
      options: {
        limit: 5,
      },
    });

  if (!user) {
    return next(new NotFoundError('User'));
  }

  // SEND RESPONSE
  res.status(200).send(user);
};

export default showUser;
