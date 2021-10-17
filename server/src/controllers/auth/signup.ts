import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../../models/user';

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body;

  const existingEmail = await User.findOne({ email });
  const existingUsername = await User.findOne({ username });

  if (existingUsername || existingEmail) {
    return next(
      new BadRequestError(`${existingUsername ? 'Username' : 'Email'} in use`)
    );
  }

  const newUser = await User.create({
    username,
    email,
    password,
  });

  // Generate JWT
  const token = jwt.sign(
    {
      _id: newUser._id,
      role: newUser.role,
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
  newUser.password = undefined;

  res.status(201).json({
    token,
    data: {
      newUser,
    },
  });
};

export default signup;
