"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_found_error_1 = require("../../errors/not-found-error");
const user_1 = require("../../models/user");
const showUser = async (req, res, next) => {
    const user = await user_1.User.findById(req.params.id).select('-password');
    if (!user) {
        return next(new not_found_error_1.NotFoundError('User'));
    }
    res.status(200).send(user);
};
exports.default = showUser;
//# sourceMappingURL=show.js.map