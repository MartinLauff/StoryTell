"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const createPost = async () => {
    const cookie = await global.login();
    return await supertest_1.default(app_1.default).post('/api/posts').set('Cookie', cookie).send({
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
    const posts = await supertest_1.default(app_1.default)
        .get(`/api/topics/${res.body.topic}`)
        .set('Cookie', cookie)
        .send();
    expect(posts.body.data.length).toEqual(3);
});
//# sourceMappingURL=topics.test.js.map