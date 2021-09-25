import { Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { Post } from '../../models/post';

const destroyPost = async (req: Request, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new NotFoundError('Post');
  }

  if (post.postedBy.toString() !== req.currentUser!._id.toString()) {
    throw new NotAuthorizedError();
  }

  await Post.deleteOne({ _id: post._id });
  // SEND RESPONSE
  res.status(204).send(null);
};

export default destroyPost;
