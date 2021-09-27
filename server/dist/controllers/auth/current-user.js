"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentUser = (req, res) => {
    res.send({ currentUser: req.currentUser || null });
};
exports.default = currentUser;
//# sourceMappingURL=current-user.js.map