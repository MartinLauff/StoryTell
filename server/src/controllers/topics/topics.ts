import { Request, Response } from 'express';
import { Post } from '../../models/post';

const index = async (req: Request, res: Response) => {
  const posts = await Post.find({
    slug: req.params.slug,
  })
    .populate({
      path: 'postedBy',
      select: 'photo username',
    })
    .sort('-createdAt');

  // SEND RESPONSE
  res.status(200).send({
    coverImage: `${req.params.slug}.jpeg`,
    data: { posts, userId: req.user._id },
  });
};

export default index;
