import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

// @ts-ignore
export const errorHandler = (
  err: Error,
  // @ts-ignore
  req: Request,
  res: Response,
  // @ts-ignore
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
