"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('clears the cookie after signing out', async () => {
    await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signup')
        .send({
        email: 'test@test.com',
        password: 'password',
        username: 'testuser123',
    })
        .expect(201);
    const response = await (0, supertest_1.default)(app_1.default)
        .post('/api/auth/signout')
        .send({})
        .expect(200);
    expect(response.get('Set-Cookie')[0].startsWith('jwt=loggedout'));
});
//# sourceMappingURL=signout.test.js.map