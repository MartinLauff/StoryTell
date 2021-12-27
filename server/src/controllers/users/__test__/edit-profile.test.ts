import request from 'supertest';
import app from '../../../app';

it('returns a 401 if the user is not authenticated', async () => {
  await request(app).put('/api/users/update-my-profile').send().expect(401);
});

it('returns a 400 if the user provides password,newPassword and currentPassword', async () => {
  const token = await global.signin();

  await request(app)
    .put('/api/users/update-my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send({
      password: 'incorrect',
    })
    .expect(400);

  await request(app)
    .put('/api/users/update-my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send({
      newPassword: 'incorrect',
    })
    .expect(400);

  await request(app)
    .put('/api/users/update-my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send({
      currentPassword: 'incorrect',
    })
    .expect(400);
});

it('updates the user provided valid inputs', async () => {
  const token = await global.signin();

  const res = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send();

  expect(res.body.username).toEqual('testuser123');
  expect(res.body.email).toEqual('test@test.com');
  expect(res.body.photo).toEqual('default.jpg');
  expect(res.body.hobby).toEqual('Your hobby');

  await request(app)
    .put('/api/users/update-my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send({
      username: 'New Name',
      email: 'newg@gmai.com',
      photo: 'New phtoto',
      hobby: 'New hobby',
    })
    .expect(200);

  const res2 = await request(app)
    .get('/api/users/my-profile')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  expect(res2.body.username).toEqual('New Name');
  expect(res2.body.email).toEqual('newg@gmai.com');
  expect(res2.body.photo).toEqual('New phtoto');
  expect(res2.body.hobby).toEqual('New hobby');
});
