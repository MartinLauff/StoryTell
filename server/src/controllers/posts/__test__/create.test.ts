import request from 'supertest';
import app from '../../../app';
import { Post } from '../../../models/post';

it('has a route handler listening to /api/posts for post requests', async () => {
  const response = await request(app).post('/api/posts').send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app).post('/api/posts').send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const cookie = await global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid title is provided', async () => {
  const cookie = await global.signin();

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: '',
      topic: 'business',
      content: 'text',
    })
    .expect(400);

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      topic: 'fitness',
      content: 'text',
    })
    .expect(400);
});

it('returns an error if an invalid content is provided', async () => {
  const cookie = await global.signin();

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      content: '',
      topic: 'fitness',
      title: 'title',
    })
    .expect(400);

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      topic: 'fitness',
      title: 'title',
    })
    .expect(400);
});

it('returns an error if an invalid topic is provided', async () => {
  const cookie = await global.signin();

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      topic: '',
      title: 'title',
      content: 'text',
    })
    .expect(400);

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      title: 'The title',
      content: 'text',
    })
    .expect(400);
});

it('creates a post with valid inputs', async () => {
  const cookie = await global.signin();
  // add in a check to make sure a post was saved
  let posts = await Post.find({});
  expect(posts.length).toEqual(0);

  await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      topic: 'extras',
      title: 'My first client',
      content: 'Lorem ipsum',
      coverImage: 'img',
    })
    .expect(201);

  posts = await Post.find({});
  expect(posts.length).toEqual(1);
});
