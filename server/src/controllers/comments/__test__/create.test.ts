import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('has a route handler listening to /api/comments/:id for comment requests', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const cookie = await global.signin();
  const response = await request(app)
    .post(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send();

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).post(`/api/comments/${id}`).send().expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const cookie = await global.signin();

  const response = await request(app)
    .post(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid content is provided', async () => {
  const cookie = await global.signin();
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .post(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send({
      content: 'txt',
    })
    .expect(400);

  await request(app)
    .post(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send({
      content: '',
    })
    .expect(400);

  await request(app)
    .post(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send({
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    })
    .expect(400);

  await request(app)
    .post(`/api/comments/${id}`)
    .set('Cookie', cookie)
    .send({})
    .expect(400);
});

it('creates a comment with valid inputs', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });

  const post = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .expect(200);

  expect(post.body.comments.length).toEqual(0);

  await request(app)
    .post(`/api/comments/${response.body._id}`)
    .set('Cookie', cookie)
    .send({
      content: 'Lorem ipsum 22',
      post: response.body._id,
    })
    .expect(201);

  const post2 = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .expect(200);

  expect(post2.body.comments.length).toEqual(1);
});
