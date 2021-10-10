import { NextFunction, Request, Response } from 'express';
import { Comment } from '../../models/comment';
import { BadRequestError } from '../../errors/bad-request-error';
import { Activity } from '../../models/activity';
import { Post } from '../../models/post';
import { catchAsync } from '../../errors/catchAsync';

const createComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;
    const post = await Post.findById(req.params.id);

    if (!content) {
      return next(new BadRequestError('A comment must have a text'));
    }

    // CREATE COMMENT
    const comment = await Comment.create({
      content,
      postedBy: req.user._id,
      post: post?._id,
    });

    await Activity.create({
      post: req.params.id,
      type: 'commented on your post',
      user: req.user._id,
      linkToUser: post?.postedBy,
    });

    // SEND RESPONSE
    res.status(201).send(comment);
  }
);

export default createComment;
