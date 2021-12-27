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
    await (0, supertest_1.default)(app_1.default).get(`/api/users/${id}`).send().expect(401);
});
it('returns a 404 if the user does not exist', async () => {
    const id = new mongoose_1.default.Types.ObjectId().toHexString();
    const token = await global.signin();
    await (0, supertest_1.default)(app_1.default)
        .get(`/api/users/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404);
});
it('returns a user if authenticated', async () => {
    const token = await global.signin();
    const res = await (0, supertest_1.default)(app_1.default)
        .get('/api/users/my-profile')
        .set('Authorization', `Bearer ${token}`)
        .send();
    await (0, supertest_1.default)(app_1.default)
        .get(`/api/users/${res.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
});
//# sourceMappingURL=show.test.js.map