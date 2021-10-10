import request from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/users/${id}`).send().expect(401);
});
it('returns a 404 if the user does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const token = await global.signin();
  await request(app)
    .get(`/api/users/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(404);
});

it('returns a user if authenticated', async () => {
  const token = await global.signin();
  const res = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send();

  await request(app)
    .get(`/api/users/${res.body._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);
});
