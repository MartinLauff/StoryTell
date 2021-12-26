"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('creates activity after creating comment', async () => {
    const token = await global.signin();
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const res = await (0, supertest_1.default)(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token2}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    });
    await (0, supertest_1.default)(app_1.default)
        .post(`/api/comments/${res.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
        content: 'Lorem ipsum 22',
    })
        .expect(201);
    const activity = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/activities')
        .set('Authorization', `Bearer ${token2}`)
        .expect(200);
    expect(activity.body.data.length).toEqual(1);
});
it('creates activity after creating like', async () => {
    const token = await global.signin();
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const res = await (0, supertest_1.default)(app_1.default)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token2}`)
        .send({
        topic: 'extras',
        title: 'My first client',
        content: 'Lorem ipsum',
        coverImage: 'img',
    });
    await (0, supertest_1.default)(app_1.default)
        .put(`/api/upvotes/${res.body._id}/like`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(201);
    const activity = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/activities')
        .set('Authorization', `Bearer ${token2}`)
        .expect(200);
    expect(activity.body.data.length).toEqual(1);
});
it('creates activity after following a user', async () => {
    const token = await global.signin();
    const token2 = await global.signin('test2@test.com', 'password', 'testuser1234');
    const res = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/my-profile')
        .set('Authorization', `Bearer ${token2}`)
        .send();
    await (0, supertest_1.default)(app_1.default)
        .put(`/api/users/follow/${res.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    const activity = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/activities')
        .set('Authorization', `Bearer ${token2}`)
        .expect(200);
    expect(activity.body.data.length).toEqual(1);
});
//# sourceMappingURL=activities.test.js.map