import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { Post } from '../../models/post';

const destroyPost = async (req: Request, res: Response, next: NextFunction) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new NotFoundError('Post'));
  }

  if (post.postedBy.toString() !== req.user._id.toString()) {
    return next(new NotAuthorizedError("Can't update foreign post"));
  }

  await Post.deleteOne({ _id: post._id });
  // SEND RESPONSE
  res.status(204).send(null);
};

export default destroyPost;
