"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('can fetch a list of posts', async () => {
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    });
    const res = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    });
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    await supertest_1.default(app_1.default)
        .put(`/api/users/follow/${res.body.postedBy}`)
        .set('Authorization', `Bearer ${token2}`)
        .send()
        .expect(200);
    const posts = await supertest_1.default(app_1.default)
        .get('/api/posts')
        .set('Authorization', `Bearer ${token2}`)
        .send()
        .expect(200);
    expect(posts.body.data.length).toEqual(2);
});
//# sourceMappingURL=index.test.js.map