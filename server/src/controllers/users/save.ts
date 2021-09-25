import { Request, Response } from 'express';
import { User } from '../../models/user';

const save = async (req: Request, res: Response) => {
  try {
    const saved = await User.updateOne(
      {
        _id: req.currentUser!._id,
      },
      {
        $addToSet: { savedPosts: req.params.id },
      }
    );

    res.status(200).send(saved);
  } catch (err) {
    res.send({ error: err });
  }
};

export default save;
