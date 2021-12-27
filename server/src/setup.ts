import { MongoMemoryServer } from 'mongodb-memory-server';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

declare global {
  var signin: (
    email?: string,
    password?: string,
    username?: string
  ) => Promise<string>;
}
declare global {
  var login: () => string;
}

let mongod: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'qwwerttzuuiioplkjg';
  process.env.JWT_EXPIRES_IN = '90d';
  // process.env.JWT_COOKIE_EXPIRES_IN = '90';

  mongod = await MongoMemoryServer.create();
  const mongoUri = mongod.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongod.stop();
  await mongoose.connection.close();
});

global.signin = async (
  email = 'test@test.com',
  password = 'password',
  username = 'testuser123'
) => {
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      email,
      password,
      username,
    })
    .expect(201);

  const { token } = response.body;

  return token;
};

global.login = () => {
  // Create the JWT!
  const token = jwt.sign(
    {
      _id: new mongoose.Types.ObjectId().toHexString(),
    },
    process.env.JWT_KEY!,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  return token;
};
