import request from 'supertest';
import app from '../../../app';

it('can fetch a list of posts based on topic', async () => {
  const token = await global.signin();

  const res = await request(app)
    .post('/api/posts')
    .set('Authorization', `Bearer ${token}`)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    });

  const posts = await request(app)
    .get(`/api/topics/${res.body.topic}`)
    .set('Authorization', `Bearer ${token}`)
    .send();

  expect(posts.body.data.length).toEqual(1);
});
