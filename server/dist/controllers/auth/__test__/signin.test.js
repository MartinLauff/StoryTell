"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('fails when a email that does not exist is provided', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signin')
        .send({
        email: 'test@test.com',
        password: 'password',
    })
        .expect(400);
});
it('fails when an incorrect password is supplied', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signin')
        .send({
        email: 'test@test.com',
        password: 'wwwwwwwwww',
    })
        .expect(400);
});
it('response with a cookie when given valid credentials', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
    const response = await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signin')
        .send({
        email: 'test@test.com',
        password: 'password',
    })
        .expect(200);
    expect(response.get('Set-Cookie')).toBeDefined();
});
//# sourceMappingURL=signin.test.js.map