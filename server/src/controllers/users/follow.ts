import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Activity } from '../../models/activity';

const follow = async (req: Request, res: Response) => {
  const givingFollow = await User.updateOne(
    { _id: req.params.id },
    {
      $addToSet: { followers: req.currentUser!._id },
    }
  ).select('-password');

  const getttingFollow = await User.updateOne(
    { _id: req.currentUser!._id },
    {
      $addToSet: { following: req.params.id },
    }
  ).select('-password');

  await Activity.create({
    type: 'started following you',
    user: req.currentUser!._id,
    linkToUser: req.params.id,
  });

  res.status(200).send({
    follower: givingFollow,
    following: getttingFollow,
  });
};

export default follow;
