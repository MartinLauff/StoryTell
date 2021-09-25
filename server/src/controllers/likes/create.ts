import { Request, Response } from 'express';
import { Post } from '../../models/post';
import { Activity } from '../../models/activity';

const createLike = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    const like = await Post.updateOne(
      {
        _id: post?._id,
      },
      {
        $addToSet: { likes: req.currentUser?._id },
      }
    );

    await Activity.create({
      post: post?._id,
      type: 'liked your post',
      user: req.currentUser!._id,
      linkToUser: post?.postedBy,
    });

    res.status(201).send(like);
  } catch (err) {
    res.send({ error: err });
  }
};

export default createLike;
