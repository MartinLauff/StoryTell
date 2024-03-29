"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mongoose_1 = __importDefault(require("mongoose"));
it('has a route handler listening to /api/upvotes/:id/like for like requests', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    const response = await (0, supertest_1.default)(app_1.default).put(`/api/upvotes/${id}/like`).send({});
    expect(response.status).not.toEqual(404);
});
it('can only be accessed if the user is signed in', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await (0, supertest_1.default)(app_1.default).put(`/api/upvotes/${id}/like`).send({}).expect(401);
});
it('returns a status other than 401 if the user is signed in', async () => {
    const token = await global.signin();
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    const response = await (0, supertest_1.default)(app_1.default)
        .put(`/api/upvotes/${id}/like`)
        .set('Authorization', `Bearer ${token}`)
        .send({});
    expect(response.status).not.toEqual(401);
});
it('creates a like', async () => {
    const token = await global.signin();
    const response = await (0, supertest_1.default)(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    })
        .expect(201);
    expect(response.body.likes.length).toEqual(0);
    await (0, supertest_1.default)(app_1.default)
        .put(`/api/upvotes/${response.body._id}/like`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(201);
    const response2 = await (0, supertest_1.default)(app_1.default)
        .get(`/api/posts/${response.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send();
    expect(response2.body.likes.length).toEqual(1);
});
//# sourceMappingURL=create.test.js.map