import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('returns a 404 if the post is not found', async () => {
  const cookie = await global.signin();
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .get(`/api/posts/${id}`)
    .set('Cookie', cookie)
    .send()
    .expect(404);
});

it('can only be accessed if the user is signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/posts/${id}`).send().expect(401);
});

it('returns the post if the post is found', async () => {
  const cookie = await global.signin();

  const title = 'concert';
  const topic = 'lifeStyle';
  const content = 'lorem ispusm';

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title,
      topic,
      content,
    })
    .expect(201);

  const postResponse = await request(app)
    .get(`/api/posts/${response.body._id}`)
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(postResponse.body.title).toEqual(title);
  expect(postResponse.body.topic).toEqual(topic);
  expect(postResponse.body.content).toEqual(content);
});
