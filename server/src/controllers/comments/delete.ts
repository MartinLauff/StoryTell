import { Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { Comment } from '../../models/comment';

const deleteComment = async (req: Request, res: Response) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    throw new NotFoundError('Comment');
  }

  if (comment.postedBy.toString() !== req.currentUser!._id.toString()) {
    throw new NotAuthorizedError();
  }

  await Comment.deleteOne({ _id: comment._id });
  // SEND RESPONSE
  res.status(204).send(null);
};

export default deleteComment;
