"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mongoose_1 = __importDefault(require("mongoose"));
it('returns a 404 if the post is not found', async () => {
    const token = await global.signin();
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await supertest_1.default(app_1.default)
        .get(`/api/posts/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404);
});
it('can only be accessed if the user is signed in', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await supertest_1.default(app_1.default).get(`/api/posts/${id}`).send().expect(401);
});
it('returns the post if the post is found', async () => {
    const token = await global.signin();
    const title = 'concert';
    const topic = 'lifeStyle';
    const content = 'lorem ispusm';
    const response = await supertest_1.default(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title,
        topic,
        content,
    })
        .expect(201);
    const postResponse = await supertest_1.default(app_1.default)
        .get(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    expect(postResponse.body.title).toEqual(title);
    expect(postResponse.body.topic).toEqual(topic);
    expect(postResponse.body.content).toEqual(content);
});
//# sourceMappingURL=show.test.js.map