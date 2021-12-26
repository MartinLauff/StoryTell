import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('has a route handler listening to /api/upvotes/:id/like for like requests', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app).put(`/api/upvotes/${id}/like`).send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).put(`/api/upvotes/${id}/like`).send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const token = await global.signin();
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .put(`/api/upvotes/${id}/like`)
    .set('Authorization', `Bearer ${token}`)
    .send({});

  expect(response.status).not.toEqual(401);
});

it('creates a like', async () => {
  const token = await global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Authorization', `Bearer ${token}`)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    })
    .expect(201);

  expect(response.body.likes.length).toEqual(0);

  await request(app)
    .put(`/api/upvotes/${response.body._id}/like`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(201);

  const response2 = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send();

  expect(response2.body.likes.length).toEqual(1);
});
