import { Request, Response } from 'express';
import { User } from '../../models/user';
import { catchAsync } from '../../errors/catchAsync';

const unsave = catchAsync(async (req: Request, res: Response) => {
  const unsaved = await User.updateOne(
    {
      _id: req.user._id,
    },
    {
      $pull: { savedPosts: req.params.id },
    }
  );

  res.status(200).send(unsaved);
});

export default unsave;
