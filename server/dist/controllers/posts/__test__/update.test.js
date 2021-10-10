"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mongoose_1 = __importDefault(require("mongoose"));
it('returns a 404 if the provided id does not exist', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
        content: 'qweqweqweq',
    })
        .expect(404);
});
it('returns a 401 if the user is not authenticated', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${id}`)
        .send({
        content: 'qweqweqweq',
    })
        .expect(401);
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
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token2}`)
        .send({
        content: 'qweqweqweqq',
    })
        .expect(401);
});
it('returns a 400 if the user provides title,topic and coverImage', async () => {
    const token = await global.signin();
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'weqweqw',
        topic: 'bussiness',
        content: 'qweqweqweq',
    });
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'incorrect',
    })
        .expect(400);
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'incorrect',
    })
        .expect(400);
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
        coverImage: 'incorrect',
    })
        .expect(400);
});
it('updates the post provided valid inputs', async () => {
    const token = await global.signin();
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'same title',
        topic: 'business',
        content: 'qweqweqweq',
    });
    await supertest_1.default(app_1.default)
        .put(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
        content: 'updated text',
    })
        .expect(200);
    const postResponse = await supertest_1.default(app_1.default)
        .get(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send();
    expect(postResponse.body.title).toEqual('same title');
    expect(postResponse.body.content).toEqual('updated text');
    expect(postResponse.body.topic).toEqual('business');
});
//# sourceMappingURL=update.test.js.map