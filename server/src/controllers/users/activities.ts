import { Request, Response } from 'express';
import { Activity } from '../../models/activity';

const activities = async (req: Request, res: Response) => {
  const activities = await Activity.find({
    linkToUser: req.currentUser!._id,
  })
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
