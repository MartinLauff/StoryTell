import { Request, Response } from 'express';
import { NotFoundError } from '../../errors/not-found-error';
import { User } from '../../models/user';

const myProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.currentUser!._id)
    .populate('posts')
    .select('-password');

  if (!user) {
    throw new NotFoundError('User');
  }

  // SEND RESPONSE
  res.status(200).send(user);
};

export default myProfile;
