"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentUser = async (req, res) => {
    const { _id, role } = req.user;
    res.send({ currentUser: _id, role });
};
exports.default = currentUser;
//# sourceMappingURL=currentUser.js.map