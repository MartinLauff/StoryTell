import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('has a route handler listening to /api/upvotes/:id/unlike for like requests', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app).put(`/api/upvotes/${id}/unlike`).send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).put(`/api/upvotes/${id}/unlike`).send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const cookie = await global.signin();
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .put(`/api/upvotes/${id}/unlike`)
    .set('Cookie', cookie)
    .send({});

  expect(response.status).not.toEqual(401);
});

it('deletes a like', async () => {
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

  expect(response.body.likes.length).toEqual(0);

  await request(app)
    .put(`/api/upvotes/${response.body._id}/like`)
    .set('Cookie', cookie)
    .send()
    .expect(201);

  const response2 = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send();

  expect(response2.body.likes.length).toEqual(1);

  await request(app)
    .put(`/api/upvotes/${response2.body._id}/unlike`)
    .set('Cookie', cookie)
    .send()
    .expect(200);

  const response3 = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send();

  expect(response3.body.likes.length).toEqual(0);
});
