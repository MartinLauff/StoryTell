import { Request, Response } from 'express';
import { Post } from '../../models/post';

const saved = async (req: Request, res: Response) => {
  const posts = await Post.find({
    _id: { $in: req.user?.savedPosts },
  })
    .populate({
      path: 'postedBy',
      select: 'photo username',
    })
    .sort('-createdAt');

  // SEND RESPONSE
  res.status(200).send({
    posts,
    userId: req.user._id,
  });
};

export default saved;
