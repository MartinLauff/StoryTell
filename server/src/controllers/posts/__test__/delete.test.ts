import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';
import { Post } from '../../../models/post';

it('returns a 404 if the provided id does not exist', async () => {
  const cookie = await global.signin();

  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .delete(`/api/posts/${id}`)
    .set('Cookie', cookie)
    .send({})
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).delete(`/api/posts/${id}`).send({}).expect(401);
});

it('returns a 401 if the user does not own the post', async () => {
  /// f signups
  const cookie = await global.signin();
  const cookie2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );

  /// Creating post
  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: 'weqweqw',
      topic: 'bussiness',
      content: 'qweqweqweq',
    })
    .expect(201);

  /// Checking post existence
  let posts = await Post.find({});
  expect(posts.length).toEqual(1);

  /// Deleting post
  await request(app)
    .delete(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie2)
    .send({})
    .expect(401);

  /// Checks if post wasn't deleted
  posts = await Post.find({});
  expect(posts.length).toEqual(1);
});

it('deletes the post if user owns a post', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: 'weqweqw',
      topic: 'bussiness',
      content: 'qweqweqweq',
    });
  let posts = await Post.find({});
  expect(posts.length).toEqual(1);

  await request(app)
    .delete(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send({})
    .expect(204);

  posts = await Post.find({});
  expect(posts.length).toEqual(0);
});
