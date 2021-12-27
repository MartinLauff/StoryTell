import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/bad-request-error';
import { Password } from './password';
import { User } from '../../models/user';

const signin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).select('+password');
  if (!existingUser) {
    return next(new BadRequestError('Invalid credentials'));
  }

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );
  if (!passwordsMatch) {
    return next(new BadRequestError('Invalid Credentials'));
  }

  // Generate JWT
  const token = jwt.sign(
    {
      _id: existingUser._id,
      role: existingUser.role,
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
    // secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  // Remove password from output
  //@ts-ignore
  existingUser.password = undefined;

  res.status(200).json({
    token,
    data: {
      existingUser,
    },
  });
};

export default signin;
