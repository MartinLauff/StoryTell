"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
it('returns a 401 if the user is not authenticated', async () => {
    await (0, supertest_1.default)(app_1.default).put('/api/users/update-password').send().expect(401);
});
it('returns a 400 if the user provides empty newPassword', async () => {
    const token = await global.signin();
    await (0, supertest_1.default)(app_1.default)
        .put('/api/users/update-password')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(400);
});
it("doesn't update the password if provided wrong password", async () => {
    const token = await global.signin();
    await (0, supertest_1.default)(app_1.default)
        .put('/api/users/update-password')
        .set('Authorization', `Bearer ${token}`)
        .send({
        currentPassword: 'passwordd',
        newPassword: 'newpassword',
    })
        .expect(400);
});
it('updates the password if provided correct password', async () => {
    const token = await global.signin();
    await (0, supertest_1.default)(app_1.default)
        .put('/api/users/update-password')
        .set('Authorization', `Bearer ${token}`)
        .send({
        currentPassword: 'password',
        newPassword: 'newpassword',
    })
        .expect(200);
});
//# sourceMappingURL=update-password.test.js.map