import { Request, Response } from 'express';
import { Post } from '../../models/post';

const index = async (req: Request, res: Response) => {
  const posts = await Post.find({
    postedBy: { $in: req.user?.following },
  })
    .populate({
      path: 'postedBy',
      select: 'photo username',
    })
    .sort('-createdAt');

  // SEND RESPONSE
  res.status(200).send({
    results: posts.length,
    data: posts,
  });
};

export default index;
