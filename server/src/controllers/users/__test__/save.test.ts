import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).put(`/api/users/save/${id}`).send().expect(401);
});

it('checks if post is saved correctly', async () => {
  const token = await global.signin();

  const post = await request(app)
    .post('/api/posts')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'weqweqw',
      topic: 'bussiness',
      content: 'qweqweqweq',
    });

  await request(app)
    .put(`/api/users/save/${post.body._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  const res = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send();

  expect(res.body.savedPosts.length).toEqual(1);
});
