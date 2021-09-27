"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('responds with details about the current user', async () => {
    const cookie = await global.signin();
    const response = await supertest_1.default(app_1.default)
        .get('/api/auth/currentuser')
        .set('Cookie', cookie)
        .send()
        .expect(200);
    expect(response.body.currentUser.email).toEqual('test@test.com');
});
it('responds with null if not authenticaed', async () => {
    const response = await supertest_1.default(app_1.default)
        .get('/api/auth/currentuser')
        .send()
        .expect(200);
    expect(response.body.currentUser).toEqual(null);
});
//# sourceMappingURL=current-user.test.js.map