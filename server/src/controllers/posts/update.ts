import { Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { Post } from '../../models/post';

const updatePost = async (req: Request, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new NotFoundError('Post');
  }

  if (post.postedBy.toString() !== req.currentUser!._id.toString()) {
    throw new NotAuthorizedError();
  }

  post.set({
    content: req.body.content,
  });

  await post.save();

  res.status(200).send(post);
};

export default updatePost;
