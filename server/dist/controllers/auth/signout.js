"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signout = (req, res) => {
    req.session = null;
    res.send({});
};
exports.default = signout;
//# sourceMappingURL=signout.js.map