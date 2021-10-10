"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('returns a 401 if the user is not authenticated', async () => {
    await supertest_1.default(app_1.default).get('/api/users/my-profile').send().expect(401);
});
it('returns a user if authenticated', async () => {
    const token = await global.signin();
    await supertest_1.default(app_1.default)
        .get('/api/users/my-profile')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
});
//# sourceMappingURL=my-profile.test.js.map