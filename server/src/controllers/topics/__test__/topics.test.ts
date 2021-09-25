import request from 'supertest';
import app from '../../../app';

const createPost = async () => {
  const cookie = await global.login();
  return await request(app).post('/api/posts').set('Cookie', cookie).send({
    topic: 'extras',
    title: 'My first client',
    content: 'Lorem ipsum',
    coverImage: 'img',
  });
};

it('can fetch a list of posts based on topic', async () => {
  const cookie = await global.signin();

  const res = await createPost();
  await createPost();
  await createPost();

  const posts = await request(app)
    .get(`/api/topics/${res.body.topic}`)
    .set('Cookie', cookie)
    .send();

  expect(posts.body.data.length).toEqual(3);
});
