import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../../errors/not-authorized-error';
import { NotFoundError } from '../../errors/not-found-error';
import { Comment } from '../../models/comment';
import { catchAsync } from '../../errors/catchAsync';

const deleteComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return next(new NotFoundError('Comment'));
    }

    //@ts-ignore
    if (comment.postedBy._id.toString() !== req.user._id.toString()) {
      return next(new NotAuthorizedError("Can't delete foreign comment"));
    }

    await Comment.deleteOne({ _id: comment._id });
    // SEND RESPONSE
    res.status(204).send(null);
  }
);

export default deleteComment;
