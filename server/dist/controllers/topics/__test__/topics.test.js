"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('can fetch a list of posts based on topic', async () => {
    const token = await global.signin();
    const res = await (0, supertest_1.default)(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    });
    const posts = await (0, supertest_1.default)(app_1.default)
        .get(`/api/topics/${res.body.topic}`)
        .set('Authorization', `Bearer ${token}`)
        .send();
    expect(posts.body.data.length).toEqual(1);
});
//# sourceMappingURL=topics.test.js.map