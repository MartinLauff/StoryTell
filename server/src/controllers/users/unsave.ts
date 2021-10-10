import { Request, Response } from 'express';
import { User } from '../../models/user';

const unsave = async (req: Request, res: Response) => {
  try {
    const unsaved = await User.updateOne(
      {
        _id: req.user._id,
      },
      {
        $pull: { savedPosts: req.params.id },
      }
    );

    res.status(200).send(unsaved);
  } catch (err) {
    res.send({ error: err });
  }
};

export default unsave;
