import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../../models/user';

const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const existingEmail = await User.findOne({ email });
  const existingUsername = await User.findOne({ username });

  if (existingUsername || existingEmail) {
    throw new BadRequestError(
      `${existingUsername ? 'Username' : 'Email'} in use`
    );
  }

  const newUser = await User.create({
    username,
    email,
    password,
  });

  // Generate JWT
  const userJwt = jwt.sign(
    {
      _id: newUser._id,
      email: newUser.email,
    },
    process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = { jwt: userJwt };

  res.status(201).send(newUser);
};

export default signup;
