import { Request, Response } from 'express';
import { Post } from '../../models/post';
import { Activity } from '../../models/activity';
import { catchAsync } from '../../errors/catchAsync';

const createLike = catchAsync(async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    const like = await Post.updateOne(
      { _id: post?._id },
      { $addToSet: { likes: req.user._id } }
    );

    await Activity.create({
      post: post?._id,
      type: 'liked your post',
      user: req.user._id,
      linkToUser: post?.postedBy,
      topic: post?.slug,
    });

    res.status(201).send(like);
  } catch (err) {
    res.send({ error: err });
  }
});

export default createLike;
