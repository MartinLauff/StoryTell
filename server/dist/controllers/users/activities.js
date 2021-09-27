"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activity_1 = require("../../models/activity");
const activities = async (req, res) => {
    const activities = await activity_1.Activity.find({
        linkToUser: req.currentUser._id,
    })
        .populate({
        path: 'user',
        select: 'photo username',
    })
        .populate({
        path: 'post',
        select: 'coverImage',
    })
        .sort('-createdAt');
    res.status(200).send({
        results: activities.length,
        data: activities,
    });
};
exports.default = activities;
//# sourceMappingURL=activities.js.map