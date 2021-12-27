import request from 'supertest';
import app from '../../../app';

it('can fetch a list of posts', async () => {
  const token = await global.signin();

  // Create 2 posts
  await request(app)
    .post('/api/posts')
    .set('Authorization', `Bearer ${token}`)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });
  const res = await request(app)
    .post('/api/posts')
    .set('Authorization', `Bearer ${token}`)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });
  // Login 2nd user
  const token2 = await global.signin(
    'test2@test.com',
    'password',
    'testuser1234'
  );

  // Follow the creator of the posts above
  await request(app)
    .put(`/api/users/follow/${res.body.postedBy}`)
    .set('Authorization', `Bearer ${token2}`)
    .send()
    .expect(200);

  // Show posts of the following users
  const posts = await request(app)
    .get('/api/posts')
    .set('Authorization', `Bearer ${token2}`)
    .send()
    .expect(200);

  expect(posts.body.data.length).toEqual(2);
});
