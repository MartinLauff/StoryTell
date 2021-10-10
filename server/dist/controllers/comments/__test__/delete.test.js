"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mongoose_1 = __importDefault(require("mongoose"));
const comment_1 = require("../../../models/comment");
it('has a route handler listening to /api/comments/:id for like requests', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    const response = await supertest_1.default(app_1.default).delete(`/api/comments/${id}`).send({});
    expect(response.status).not.toEqual(404);
});
it('can only be accessed if the user is signed in', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await supertest_1.default(app_1.default).delete(`/api/comments/${id}`).send({}).expect(401);
});
it('returns a status other than 401 if the user is signed in', async () => {
    const token = await global.signin();
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    const response = await supertest_1.default(app_1.default)
        .delete(`/api/comments/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({});
    expect(response.status).not.toEqual(401);
});
it('returns a 401 if the user does not own the comment and 204 if does', async () => {
    const token = await global.signin();
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'weqweqw',
        topic: 'bussiness',
        content: 'qweqweqweq',
    });
    let comments = await comment_1.Comment.find({ post: response.body._id });
    expect(comments.length).toEqual(0);
    const comment = await supertest_1.default(app_1.default)
        .post(`/api/comments/${response.body._id}`)
        .set('Authorization', `Bearer ${token2}`)
        .send({
        content: 'test comment',
    })
        .expect(201);
    await supertest_1.default(app_1.default)
        .delete(`/api/comments/${comment.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(401);
    comments = await comment_1.Comment.find({ post: response.body._id });
    expect(comments.length).toEqual(1);
    await supertest_1.default(app_1.default)
        .delete(`/api/comments/${comment.body._id}`)
        .set('Authorization', `Bearer ${token2}`)
        .send({})
        .expect(204);
    comments = await comment_1.Comment.find({ post: response.body._id });
    expect(comments.length).toEqual(0);
});
//# sourceMappingURL=delete.test.js.map