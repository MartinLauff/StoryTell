"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activity_1 = require("../../models/activity");
const activities = async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    const activities = await activity_1.Activity.find({
        linkToUser: req.user._id,
    })
        .skip(skip)
        .limit(limit)
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