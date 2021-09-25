import { Request, Response } from 'express';
import { Post } from '../../models/post';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../../models/user';

const createPost = async (req: Request, res: Response) => {
  const { topic, title, content, coverImage } = req.body;

  if (!topic || !title || !content) {
    throw new BadRequestError('A post must have a title, topic and text');
  }

  // CREATE POST
  const post = await Post.create({
    title,
    topic,
    content,
    postedBy: req.currentUser!._id,
    coverImage,
  });

  await User.updateOne(
    {
      _id: req.currentUser!._id,
    },
    {
      $addToSet: { posts: post._id },
    }
  );

  // SEND RESPONSE
  res.status(201).send(post);
};

export default createPost;
