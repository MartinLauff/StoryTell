import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';
import { Comment } from '../../../models/comment';

it('has a route handler listening to /api/comments/:id for like requests', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app).delete(`/api/comments/${id}`).send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).delete(`/api/comments/${id}`).send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const cookie = await global.signin();
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .delete(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns a 401 if the user does not own the comment and 204 if does', async () => {
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
    });

  /// Checking comments existence
  let comments = await Comment.find({ post: response.body._id });
  expect(comments.length).toEqual(0);

  /// Creating comment
  const comment = await request(app)
    .post(`/api/comments/${response.body._id}`)
    .set('Cookie', cookie2)
    .send({
      content: 'test comment',
    })
    .expect(201);

  // Attempt to delete post
  await request(app)
    .delete(`/api/comments/${comment.body._id}`)
    .set('Cookie', cookie)
    .send({})
    .expect(401);

  /// Checks if post wasn't deleted
  comments = await Comment.find({ post: response.body._id });
  expect(comments.length).toEqual(1);

  // Deletes a comment
  await request(app)
    .delete(`/api/comments/${comment.body._id}`)
    .set('Cookie', cookie2)
    .send({})
    .expect(204);

  comments = await Comment.find({ post: response.body._id });
  expect(comments.length).toEqual(0);
});
