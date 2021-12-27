import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../../models/user';

const filterObj = (obj: any, ...allowedFields: string[]) => {
  const newObj: any = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const editProfile = async (req: Request, res: Response, next: NextFunction) => {
  if (req.body.password || req.body.currentPassword || req.body.newPassword) {
    return next(
      new BadRequestError(
        'This route is not for password updates. Please use /update-password.'
      )
    );
  }

  if (!req.user) {
    return next(new NotFoundError('User'));
  }

  const filteredBody = filterObj(
    req.body,
    'photo',
    'username',
    'hobby',
    'email'
  );

  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).send(updatedUser);
};

export default editProfile;
