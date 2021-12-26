import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { Post } from '../../models/post';

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new NotFoundError('Post'));
  }

  if (post.postedBy.toString() !== req.user._id.toString()) {
    return next(new NotAuthorizedError("You can't update foreign post"));
  }

  post.set({
    content: req.body.content,
  });

  await post.save();

  res.status(200).send(post);
};

export default updatePost;
