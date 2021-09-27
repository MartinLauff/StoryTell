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
it('can fetch a list of saved posts', async () => {
    const cookie = await global.signin();
    const res1 = await createPost();
    const res2 = await createPost();
    const res3 = await createPost();
    const savePost = async (postId) => {
        return await supertest_1.default(app_1.default)
            .put(`/api/users/save/${postId}`)
            .set('Cookie', cookie)
            .send()
            .expect(200);
    };
    savePost(res1.body._id);
    savePost(res2.body._id);
    savePost(res3.body._id);
    const posts = await supertest_1.default(app_1.default)
        .get('/api/posts/saved')
        .set('Cookie', cookie)
        .send();
    expect(posts.body.length).toEqual(3);
});
//# sourceMappingURL=saved.test.js.map