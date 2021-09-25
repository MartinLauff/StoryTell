import { Request, Response } from 'express';
import { Post } from '../../models/post';

const deleteLike = async (req: Request, res: Response) => {
  try {
    const unlike = await Post.updateOne(
      {
        _id: req.params.id,
      },
      {
        $pull: { likes: req.currentUser?._id },
      }
    );

    res.status(200).send(unlike);
  } catch (err) {
    res.send({ error: err });
  }
};

export default deleteLike;
