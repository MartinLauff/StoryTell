"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mongoose_1 = __importDefault(require("mongoose"));
const post_1 = require("../../../models/post");
it('returns a 404 if the provided id does not exist', async () => {
    const token = await global.signin();
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await supertest_1.default(app_1.default)
        .delete(`/api/posts/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(404);
});
it('returns a 401 if the user is not authenticated', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await supertest_1.default(app_1.default).delete(`/api/posts/${id}`).send({}).expect(401);
});
it('returns a 401 if the user does not own the post', async () => {
    const token = await global.signin();
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'weqweqw',
        topic: 'bussiness',
        content: 'qweqweqweq',
    })
        .expect(201);
    let posts = await post_1.Post.find({});
    expect(posts.length).toEqual(1);
    await supertest_1.default(app_1.default)
        .delete(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token2}`)
        .send({})
        .expect(401);
    posts = await post_1.Post.find({});
    expect(posts.length).toEqual(1);
});
it('deletes the post if user owns a post', async () => {
    const token = await global.signin();
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'weqweqw',
        topic: 'bussiness',
        content: 'qweqweqweq',
    });
    let posts = await post_1.Post.find({});
    expect(posts.length).toEqual(1);
    await supertest_1.default(app_1.default)
        .delete(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(204);
    posts = await post_1.Post.find({});
    expect(posts.length).toEqual(0);
});
//# sourceMappingURL=delete.test.js.map