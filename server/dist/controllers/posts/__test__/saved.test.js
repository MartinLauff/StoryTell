"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('can fetch a list of saved posts', async () => {
    const token = await global.signin();
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const res = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token2}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    });
    await supertest_1.default(app_1.default)
        .put(`/api/users/save/${res.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    const posts = await supertest_1.default(app_1.default)
        .get('/api/posts/saved')
        .set('Authorization', `Bearer ${token}`)
        .send();
    expect(posts.body.length).toEqual(1);
});
//# sourceMappingURL=saved.test.js.map