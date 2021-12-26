import { Request, Response } from 'express';
import { User } from '../../models/user';
import { catchAsync } from '../../errors/catchAsync';

const save = catchAsync(async (req: Request, res: Response) => {
  const saved = await User.updateOne(
    {
      _id: req.user._id,
    },
    {
      $addToSet: { savedPosts: req.params.id },
    }
  );

  res.status(200).send(saved);
});

export default save;
