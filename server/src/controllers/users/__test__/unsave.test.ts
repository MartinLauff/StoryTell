import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).put(`/api/users/unsave/${id}`).send().expect(401);
});

it('checks if post was unsaved', async () => {
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

  await request(app)
    .put(`/api/users/unsave/${post.body._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  const res2 = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send();

  expect(res2.body.savedPosts.length).toEqual(0);
});
