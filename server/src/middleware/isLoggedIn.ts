import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const currentUserMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.cookies.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.cookies.jwt, process.env.JWT_KEY!);
    req.user = payload;
  } catch (err) {}

  next();
};
