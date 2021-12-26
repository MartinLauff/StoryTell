import { Request, Response } from 'express';
import { Activity } from '../../models/activity';

const activities = async (req: Request, res: Response) => {
  //@ts-ignore
  const page = req.query.page * 1 || 1;
  //@ts-ignore
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;

  const activities = await Activity.find({
    linkToUser: req.user._id,
  })
    .skip(skip)
    .limit(limit)
    .populate({
      path: 'user',
      select: 'photo username',
    })
    .populate({
      path: 'post',
      select: 'coverImage',
    })
    .sort('-createdAt');

  // SEND RESPONSE
  res.status(200).send({
    results: activities.length,
    data: activities,
  });
};

export default activities;
