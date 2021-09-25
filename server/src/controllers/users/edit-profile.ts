import { Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../../models/user';

// file.filename = `user-${req.currentUser!._id}-${Date.now()}.jpeg`;

const filterObj = (obj: any, ...allowedFields: string[]) => {
  const newObj: any = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const editProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.currentUser!._id);

  if (req.body.password || req.body.currentPassword || req.body.newPassword) {
    throw new BadRequestError(
      'This route is not for password updates. Please use /update-password.'
    );
  }

  if (!user) {
    throw new NotFoundError('User');
  }

  if (user._id.toString() !== req.currentUser!._id.toString()) {
    throw new NotAuthorizedError();
  }
  const filteredBody = filterObj(
    req.body,
    'photo',
    'username',
    'hobby',
    'email'
  );

  const updatedUser = await User.findByIdAndUpdate(user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).send(updatedUser);
};

export default editProfile;
