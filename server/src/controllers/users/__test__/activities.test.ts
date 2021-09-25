import request from 'supertest';
import app from '../../../app';

it('creates activity after creating comment', async () => {
  const cookie = await global.signin();
  const cookie2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );
  const res = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie2)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });

  await request(app)
    .post(`/api/comments/${res.body._id}`)
    .set('Cookie', cookie)
    .send({
      content: 'Lorem ipsum 22',
    })
    .expect(201);

  const activity = await request(app)
    .get('/api/users/activities')
    .set('Cookie', cookie2)
    .expect(200);

  expect(activity.body.data.length).toEqual(1);
});
it('creates activity after creating like', async () => {
  const cookie = await global.signin();
  const cookie2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );
  const res = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie2)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });

  await request(app)
    .put(`/api/upvotes/${res.body._id}/like`)
    .set('Cookie', cookie)
    .send()
    .expect(201);

  const activity = await request(app)
    .get('/api/users/activities')
    .set('Cookie', cookie2)
    .expect(200);

  expect(activity.body.data.length).toEqual(1);
});
it('creates activity after following a user', async () => {
  const cookie = await global.signin();
  const cookie2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );

  const res = await request(app)
    .get('/api/users/my-profile')
    .set('Cookie', cookie2)
    .send();

  await request(app)
    .put(`/api/users/follow/${res.body._id}`)
    .set('Cookie', cookie)
    .send()
    .expect(200);

  const activity = await request(app)
    .get('/api/users/activities')
    .set('Cookie', cookie2)
    .expect(200);

  expect(activity.body.data.length).toEqual(1);
});
