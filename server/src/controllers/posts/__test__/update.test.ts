import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('returns a 404 if the provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const cookie = await global.signin();

  await request(app)
    .put(`/api/posts/${id}`)
    .set('Cookie', cookie)
    .send({
      content: 'qweqweqweq',
    })
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/posts/${id}`)
    .send({
      content: 'qweqweqweq',
    })
    .expect(401);
});

it('returns a 401 if the user does not own the post', async () => {
  const cookie = await global.signin();
  const cookie2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: 'weqweqw',
      topic: 'bussiness',
      content: 'qweqweqweq',
    })
    .expect(201);

  await request(app)
    .put(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie2)
    .send({
      content: 'qweqweqweqq',
    })
    .expect(401);
});

it('returns a 400 if the user provides title,topic and coverImage', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: 'weqweqw',
      topic: 'bussiness',
      content: 'qweqweqweq',
    });

  await request(app)
    .put(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send({
      title: 'incorrect',
    })
    .expect(400);

  await request(app)
    .put(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send({
      topic: 'incorrect',
    })
    .expect(400);

  await request(app)
    .put(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send({
      coverImage: 'incorrect',
    })
    .expect(400);
});

it('updates the post provided valid inputs', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: 'same title',
      topic: 'business',
      content: 'qweqweqweq',
    });

  await request(app)
    .put(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send({
      content: 'updated text',
    })
    .expect(200);

  const postResponse = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send();

  expect(postResponse.body.title).toEqual('same title');
  expect(postResponse.body.content).toEqual('updated text');
  expect(postResponse.body.topic).toEqual('business');
});
