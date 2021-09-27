"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../models/post");
const deleteLike = async (req, res) => {
    var _a;
    try {
        const unlike = await post_1.Post.updateOne({
            _id: req.params.id,
        }, {
            $pull: { likes: (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a._id },
        });
        res.status(200).send(unlike);
    }
    catch (err) {
        res.send({ error: err });
    }
};
exports.default = deleteLike;
//# sourceMappingURL=delete.js.map