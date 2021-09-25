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

it('can fetch a list of saved posts', async () => {
  const cookie = await global.signin();

  const res1 = await createPost();
  const res2 = await createPost();
  const res3 = await createPost();
  const savePost = async (postId: string) => {
    return await request(app)
      .put(`/api/users/save/${postId}`)
      .set('Cookie', cookie)
      .send()
      .expect(200);
  };
  savePost(res1.body._id);
  savePost(res2.body._id);
  savePost(res3.body._id);

  const posts = await request(app)
    .get('/api/posts/saved')
    .set('Cookie', cookie)
    .send();

  expect(posts.body.length).toEqual(3);
});
