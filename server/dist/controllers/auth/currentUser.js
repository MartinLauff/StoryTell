"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentUser = async (req, res) => {
    let currUser;
    if (!req.user) {
        currUser = null;
    }
    else {
        currUser = {
            _id: req.user._id,
            role: req.user.role,
        };
    }
    res.send({ currentUser: currUser });
};
exports.default = currentUser;
//# sourceMappingURL=currentUser.js.map