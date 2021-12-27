import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).put(`/api/users/follow/${id}`).send().expect(401);
});

it('follows the users if the user exist', async () => {
  const token = await global.signin();
  const token2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );

  const res = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token2}`)
    .send()
    .expect(200);

  await request(app)
    .put(`/api/users/follow/${res.body._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  const res2 = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  expect(res2.body.following.length).toEqual(1);
});
