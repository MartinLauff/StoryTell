import { Request, Response } from 'express';

const briefUser = async (req: Request, res: Response) => {
  const { photo, username, hobby, email } = req.user;

  // SEND RESPONSE
  res.status(200).send({ photo, username, hobby, email });
};

export default briefUser;
