"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('returns a 201 on successful signup', async () => {
    return (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
});
it('returns a 400 with an invalid email', async () => {
    return (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'alskdflaskjfd',
        password: 'password',
        username: 'testuser123',
    })
        .expect(400);
});
it('returns a 400 with an invalid password', async () => {
    return (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'alskdflaskjfd',
        password: 'p',
        username: 'testuser123',
    })
        .expect(400);
});
it('returns a 400 with missing email, password and username', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
    })
        .expect(400);
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        password: 'alskjdf',
    })
        .expect(400);
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        username: 'testuser123',
    })
        .expect(400);
});
it('disallows duplicate emails', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser1234',
    })
        .expect(400);
});
it('disallows duplicate usernames', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test1.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(400);
});
it('sets a cookie after successful signup', async () => {
    const response = await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
    expect(response.get('Set-Cookie')).toBeDefined();
});
//# sourceMappingURL=signup.test.js.map