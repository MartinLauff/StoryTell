"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const unsave = async (req, res) => {
    try {
        const unsaved = await user_1.User.updateOne({
            _id: req.user._id,
        }, {
            $pull: { savedPosts: req.params.id },
        });
        res.status(200).send(unsaved);
    }
    catch (err) {
        res.send({ error: err });
    }
};
exports.default = unsave;
//# sourceMappingURL=unsave.js.map