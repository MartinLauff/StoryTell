"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const briefUser = async (req, res) => {
    const { photo, username, hobby, email } = req.user;
    res.status(200).send({ photo, username, hobby, email });
};
exports.default = briefUser;
//# sourceMappingURL=briefUser.js.map