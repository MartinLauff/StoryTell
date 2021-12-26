import request from 'supertest';
import app from '../../../app';

it('returns a 401 if the user is not authenticated', async () => {
  await request(app).get('/api/users/my-profile').send().expect(401);
});
it('returns a user if authenticated', async () => {
  const token = await global.signin();
  await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);
});
