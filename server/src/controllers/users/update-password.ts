import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/bad-request-error';
import { NotFoundError } from '../../errors/not-found-error';
import { User } from '../../models/user';
import { Password } from '../auth/password';

const updatePassword = async (req: Request, res: Response) => {
  // 1) Get user from collection
  const user = await User.findById(req.currentUser!._id).select('+password');

  if (!user) {
    throw new NotFoundError('User');
  }

  // 2) Check if POSTed current password is correct
  if (!(await Password.compare(user.password, req.body.currentPassword))) {
    throw new BadRequestError('Your current password is wrong.');
  }

  // 3) IF so, update password
  user.password = req.body.newPassword;
  await user.save();
  // User.findByIdAndUpdate will not work as intended!

  // 4) Log user in, send JWT

  // Generate JWT
  const userJwt = jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = { jwt: userJwt };

  res.status(200).send(user);
};

export default updatePassword;
