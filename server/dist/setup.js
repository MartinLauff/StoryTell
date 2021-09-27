"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
let mongod;
beforeAll(async () => {
    process.env.JWT_KEY = 'qwwerttzuuiioplkjg';
    mongod = await mongodb_memory_server_1.MongoMemoryServer.create();
    const mongoUri = mongod.getUri();
    await mongoose_1.default.connect(mongoUri);
});
beforeEach(async () => {
    const collections = await mongoose_1.default.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
});
afterAll(async () => {
    await mongod.stop();
    await mongoose_1.default.connection.close();
});
global.signin = async (email = 'test@test.com', password = 'password', username = 'testuser123') => {
    const response = await supertest_1.default(app_1.default)
        .post('/api/auth/signup')
        .send({
        email,
        password,
        username,
    })
        .expect(201);
    const cookie = response.get('Set-Cookie');
    return cookie;
};
global.login = () => {
    const payload = {
        id: new mongoose_1.default.Types.ObjectId().toHexString(),
        email: 'test@gmail.com',
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY);
    const session = { jwt: token };
    const sessionJSON = JSON.stringify(session);
    const base64 = Buffer.from(sessionJSON).toString('base64');
    return [`express:sess=${base64}`];
};
//# sourceMappingURL=setup.js.map