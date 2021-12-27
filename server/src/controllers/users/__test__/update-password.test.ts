import request from 'supertest';
import app from '../../../app';

it('returns a 401 if the user is not authenticated', async () => {
  await request(app).put('/api/users/update-password').send().expect(401);
});

it('returns a 400 if the user provides empty newPassword', async () => {
  const token = await global.signin();

  await request(app)
    .put('/api/users/update-password')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(400);
});

it("doesn't update the password if provided wrong password", async () => {
  const token = await global.signin();

  await request(app)
    .put('/api/users/update-password')
    .set('Authorization', `Bearer ${token}`)
    .send({
      currentPassword: 'passwordd',
      newPassword: 'newpassword',
    })
    .expect(400);
});

it('updates the password if provided correct password', async () => {
  const token = await global.signin();

  await request(app)
    .put('/api/users/update-password')
    .set('Authorization', `Bearer ${token}`)
    .send({
      currentPassword: 'password',
      newPassword: 'newpassword',
    })
    .expect(200);
});
