import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { User } from '../models/user';

export const protect = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt && req.cookies.jwt !== 'loggedout') {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new NotAuthorizedError(
        'You are not logged in! Please log in to get access.'
      )
    );
  }

  // 2) Verification token
  //@ts-ignore
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_KEY!);

  // 3) Check if user still exists
  //@ts-ignore
  const currentUser = await User.findById(decoded._id);
  if (!currentUser) {
    return next(
      new NotAuthorizedError(
        'The user belonging to this token does no longer exist.'
      )
    );
  }

  // // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
};
