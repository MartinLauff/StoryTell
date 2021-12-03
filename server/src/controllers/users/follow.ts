import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Activity } from '../../models/activity';
import { catchAsync } from '../../errors/catchAsync';

const follow = catchAsync(async (req: Request, res: Response) => {
  const givingFollow = await User.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { followers: req.user._id } },
    { new: true }
  ).select('-password');

  const getttingFollow = await User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { following: req.params.id } },
    { new: true }
  ).select('-password');

  await Activity.create({
    type: 'started following you',
    user: req.user._id,
    linkToUser: req.params.id,
  });

  res.status(200).send({
    follower: givingFollow,
    following: getttingFollow,
  });
});

export default follow;
