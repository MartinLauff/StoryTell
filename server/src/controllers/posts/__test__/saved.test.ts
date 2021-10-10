import request from 'supertest';
import app from '../../../app';

it('can fetch a list of saved posts', async () => {
  const token = await global.signin();
  const token2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );

  const res = await request(app)
    .post('/api/posts')
    .set('Authorization', `Bearer ${token2}`)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });

  await request(app)
    .put(`/api/users/save/${res.body._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  const posts = await request(app)
    .get('/api/posts/saved')
    .set('Authorization', `Bearer ${token}`)
    .send();

  expect(posts.body.length).toEqual(1);
});
