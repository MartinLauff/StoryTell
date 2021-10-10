"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const save = async (req, res) => {
    try {
        const saved = await user_1.User.updateOne({
            _id: req.user._id,
        }, {
            $addToSet: { savedPosts: req.params.id },
        });
        res.status(200).send(saved);
    }
    catch (err) {
        res.send({ error: err });
    }
};
exports.default = save;
//# sourceMappingURL=save.js.map