import { NextFunction, Request, Response } from 'express';
import { Post } from '../../models/post';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../../models/user';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { topic, title, content, coverImage } = req.body;

  if (!topic || !title || !content) {
    return next(
      new BadRequestError('A post must have a title, topic and text')
    );
  }

  // CREATE POST
  const post = await Post.create({
    title,
    topic,
    content,
    postedBy: req.user._id,
    coverImage,
  });

  await User.updateOne(
    {
      _id: req.user._id,
    },
    {
      $addToSet: { posts: post._id },
    }
  );

  // SEND RESPONSE
  res.status(201).send({
    data: {
      post,
    },
  });
};

export default createPost;
