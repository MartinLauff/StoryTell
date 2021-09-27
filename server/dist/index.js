"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const start = async () => {
    console.log('Start..........');
    process.on('uncaughtException', (err) => {
        console.log('UNCAUGHT EXCEPTION! Shutting down...');
        console.log(err.name, err.message);
        process.exit(1);
    });
    dotenv_1.default.config({ path: path_1.default.join(__dirname, '../config.env') });
    if (!process.env.DATABASE) {
        throw new Error('DATABASE must be defined');
    }
    if (!process.env.DATABASE_PASSWORD) {
        throw new Error('DATABASE_PASSWORD must be defined');
    }
    const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
    try {
        await mongoose_1.default.connect(DB);
        console.log('DB connection successful!');
    }
    catch (err) {
        console.error(err);
    }
    const port = process.env.PORT || 3000;
    const server = app_1.default.listen(port, () => {
        console.log(`Listening on port ${port}!!!!!!!!`);
    });
    process.on('unhandledRejection', (err) => {
        console.log('UNHANDLED REJECTION! Shutting down...');
        console.log(err === null || err === void 0 ? void 0 : err.name, err === null || err === void 0 ? void 0 : err.message);
        server.close(() => {
            process.exit(1);
        });
    });
    process.on('SIGTERM', () => {
        console.log('O SIGTERM RECEIVED. Shutting down gracefully.');
        server.close(() => {
            console.log('X Process terminated!');
        });
    });
};
start();
//# sourceMappingURL=index.js.map