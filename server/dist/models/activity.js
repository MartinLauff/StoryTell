"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const activitySchema = new mongoose_1.default.Schema({
    post: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Post',
    },
    type: {
        type: String,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    linkToUser: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});
activitySchema.statics.build = (attrs) => {
    return new Activity(attrs);
};
const Activity = mongoose_1.default.model('Activity', activitySchema);
exports.Activity = Activity;
//# sourceMappingURL=activity.js.map