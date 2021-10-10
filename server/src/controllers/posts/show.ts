import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/not-found-error';

import { Post } from '../../models/post';

const showPost = async (req: Request, res: Response, next: NextFunction) => {
  const post = await Post.findById(req.params.id).populate({
    path: 'comments',
    select: '-__v',
  });

  if (!post) {
    return next(new NotFoundError('Post'));
  }

  // SEND RESPONSE
  res.status(200).send(post);
};

export default showPost;
