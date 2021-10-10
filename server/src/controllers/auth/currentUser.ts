import { Request, Response } from 'express';

const currentUser = async (req: Request, res: Response) => {
  const { _id, role } = req.user;

  res.send({ currentUser: _id, role });
};

export default currentUser;
