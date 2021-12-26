"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signout = (_req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });
    res.status(200).send();
};
exports.default = signout;
//# sourceMappingURL=signout.js.map