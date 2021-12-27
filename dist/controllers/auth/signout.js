"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    });
    res.status(200).send();
};
exports.default = signout;
//# sourceMappingURL=signout.js.map