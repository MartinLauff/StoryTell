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
    await supertest_1.default(app_1.default).put(`/api/users/unfollow/${id}`).send().expect(401);
});
it('unfollows the users if the user exist', async () => {
    const cookie = await global.signin();
    const cookie2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const res = await supertest_1.default(app_1.default)
        .get('/api/users/my-profile')
        .set('Cookie', cookie2)
        .send();
    await supertest_1.default(app_1.default)
        .put(`/api/users/follow/${res.body._id}`)
        .set('Cookie', cookie)
        .send()
        .expect(200);
    const res2 = await supertest_1.default(app_1.default)
        .get('/api/users/my-profile')
        .set('Cookie', cookie)
        .send();
    expect(res2.body.following.length).toEqual(1);
    await supertest_1.default(app_1.default)
        .put(`/api/users/unfollow/${res.body._id}`)
        .set('Cookie', cookie)
        .send()
        .expect(200);
    const res3 = await supertest_1.default(app_1.default)
        .get('/api/users/my-profile')
        .set('Cookie', cookie)
        .send()
        .expect(200);
    expect(res3.body.following.length).toEqual(0);
});
//# sourceMappingURL=unfollow.test.js.map