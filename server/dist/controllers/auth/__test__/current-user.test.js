"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('responds with details about the current user', async () => {
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .get('/api/auth/currentuser')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
});
it('responds with 401 if not authenticaed', async () => {
    await supertest_1.default(app_1.default).get('/api/auth/currentuser').send().expect(401);
});
//# sourceMappingURL=current-user.test.js.map