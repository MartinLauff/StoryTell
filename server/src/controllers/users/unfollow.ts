import { Request, Response } from 'express';
import { User } from '../../models/user';

const unfollow = async (req: Request, res: Response) => {
  const givingUnfollow = await User.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { followers: req.user._id },
    },
    {
      new: true,
    }
  ).select('-password');

  const getttingUnfollow = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { following: req.params.id },
    },
    { new: true }
  ).select('-password');

  res.status(200).send({
    follower: givingUnfollow,
    following: getttingUnfollow,
  });
};

export default unfollow;
