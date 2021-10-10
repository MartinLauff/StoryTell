import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/bad-request-error';
import { NotFoundError } from '../../errors/not-found-error';
import { User } from '../../models/user';
import { Password } from '../auth/password';

const updatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1) Get user from collection
  const user = await User.findById(req.user._id).select('+password');

  if (!user) {
    return next(new NotFoundError('User'));
  }

  // 2) Check if POSTed current password is correct
  if (!(await Password.compare(user.password, req.body.currentPassword))) {
    return next(new BadRequestError('Your current password is wrong.'));
  }

  // 3) IF so, update password
  user.password = req.body.newPassword;
  await user.save();
  // User.findByIdAndUpdate will not work as intended!

  // 4) Log user in, send JWT

  // Generate JWT
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_KEY!,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN!) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  // Remove password from output
  //@ts-ignore
  user.password = undefined;

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export default updatePassword;
