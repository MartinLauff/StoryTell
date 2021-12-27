import request from 'supertest';
import app from '../../../app';

it('responds with details about the current user', async () => {
  const token = await global.signin();

  await request(app)
    .get('/api/auth/currentuser')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);
});

it('responds with 401 if not authenticaed', async () => {
  await request(app).get('/api/auth/currentuser').send().expect(401);
});
