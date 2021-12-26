"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const password_1 = require("../controllers/auth/password");
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, 'Please tell us your name!'],
        unique: true,
        trim: true,
        minLength: 4,
        maxLength: 14,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validator_1.default.isEmail, 'Please provide a valid email!'],
    },
    hobby: {
        type: String,
        required: [true, 'Please provide a hobby'],
        default: 'Your hobby',
        trim: true,
        minLength: 2,
        maxLength: 18,
    },
    photo: { type: String, default: '/default.png' },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    password: {
        type: String,
        required: [true, 'User must have a password'],
        minLength: 8,
        maxLength: 20,
        trim: true,
        select: false,
    },
    posts: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    savedPosts: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    following: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    followers: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const hashed = await password_1.Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    next();
});
userSchema.statics.build = (attrs) => {
    return new User(attrs);
};
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
//# sourceMappingURL=user.js.map