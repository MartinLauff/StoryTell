import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Post } from '../../models/post';

const saved = async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id);
  const posts = await Post.find({
    _id: { $in: user?.savedPosts },
  });

  // SEND RESPONSE
  res.status(200).send(posts);
};

export default saved;
