import { Request, Response } from 'express';
import { Post } from '../../models/post';

const index = async (req: Request, res: Response) => {
  const posts = await Post.find({
    slug: req.params.slug,
  }).sort('-createdAt');

  // SEND RESPONSE
  res.status(200).send({
    coverImage: `${req.params.slug}.jpeg`,
    data: posts,
  });
};

export default index;
