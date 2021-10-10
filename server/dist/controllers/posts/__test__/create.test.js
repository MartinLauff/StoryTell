"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const post_1 = require("../../../models/post");
it('has a route handler listening to /api/posts for post requests', async () => {
    const response = await supertest_1.default(app_1.default).post('/api/posts').send({});
    expect(response.status).not.toEqual(404);
});
it('can only be accessed if the user is signed in', async () => {
    await supertest_1.default(app_1.default).post('/api/posts').send({}).expect(401);
});
it('returns a status other than 401 if the user is signed in', async () => {
    const token = await global.signin();
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({});
    expect(response.status).not.toEqual(401);
});
it('returns an error if an invalid title is provided', async () => {
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: '',
        topic: 'business',
        content: 'text',
    })
        .expect(400);
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'fitness',
        content: 'text',
    })
        .expect(400);
});
it('returns an error if an invalid content is provided', async () => {
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        content: '',
        topic: 'fitness',
        title: 'title',
    })
        .expect(400);
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'fitness',
        title: 'title',
    })
        .expect(400);
});
it('returns an error if an invalid topic is provided', async () => {
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: '',
        title: 'title',
        content: 'text',
    })
        .expect(400);
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'The title',
        content: 'text',
    })
        .expect(400);
});
it('creates a post with valid inputs', async () => {
    const token = await global.signin();
    let posts = await post_1.Post.find({});
    expect(posts.length).toEqual(0);
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    })
        .expect(201);
    posts = await post_1.Post.find({});
    expect(posts.length).toEqual(1);
});
//# sourceMappingURL=create.test.js.map