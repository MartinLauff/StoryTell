import { Request, Response } from 'express';

const currentUser = async (req: Request, res: Response) => {
  let currUser;
  if (!req.user) {
    currUser = null;
  } else {
    currUser = {
      _id: req.user._id,
      role: req.user.role,
    };
  }

  res.send({ currentUser: currUser });
};

export default currentUser;
