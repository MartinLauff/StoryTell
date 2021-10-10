"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const mongoose_1 = __importDefault(require("mongoose"));
it('returns a 401 if the user is not authenticated', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    await (0, supertest_1.default)(app_1.default).put(`/api/users/unsave/${id}`).send().expect(401);
});
it('checks if post was unsaved', async () => {
    const token = await global.signin();
    const post = await (0, supertest_1.default)(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({
        title: 'weqweqw',
        topic: 'bussiness',
        content: 'qweqweqweq',
    });
    await (0, supertest_1.default)(app_1.default)
        .put(`/api/users/save/${post.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    const res = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/my-profile')
        .set('Authorization', `Bearer ${token}`)
        .send();
    expect(res.body.savedPosts.length).toEqual(1);
    await (0, supertest_1.default)(app_1.default)
        .put(`/api/users/unsave/${post.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    const res2 = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/my-profile')
        .set('Authorization', `Bearer ${token}`)
        .send();
    expect(res2.body.savedPosts.length).toEqual(0);
});
//# sourceMappingURL=unsave.test.js.map