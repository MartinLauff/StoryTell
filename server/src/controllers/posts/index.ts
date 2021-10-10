import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Post } from '../../models/post';

const index = async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id);
  const posts = await Post.find({
    postedBy: { $in: user?.following },
  }).sort('-createdAt');

  // SEND RESPONSE
  res.status(200).send({
    results: posts.length,
    data: posts,
  });
};

export default index;
